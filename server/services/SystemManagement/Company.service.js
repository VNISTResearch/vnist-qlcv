const Company = require('../../models/Company.model');
const Role = require('../../models/Role.model');
const User = require('../../models/User.model');
const UserRole = require('../../models/UserRole.model');
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const generator = require("generate-password");

exports.get = (req, res) => {
    Company.find()
        .then(coms => res.status(200).json(coms))
        .catch(err => res.status(400).json({msg: err}));
    console.log("Get All Company");
}

exports.create = async (req, res) => {
    console.log("DATA: ", req.body);
    try {
        var com = await Company.create({
            name: req.body.name,
            description: req.body.description
        });
        var superRole = await Role.findOne({ //lay superadmin abstract
            name: "Super Admin"
        });
        var role = await Role.create({ //tao 1 superadmin cho cong ty do
            name: "Super Admin",
            company: com._id,
            abstract: [superRole._id]
        });
        bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'vnist.qlcv@gmail.com',
                    pass: 'qlcv123@'
                }
            });

            const password = generator.generate({
                length: 10,
                numbers: true
            });

            var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
                from: 'Hệ thống quản lý công việc - VNIST',
                to: req.body.email,
                subject: 'Xác thực tạo tài khoản trên hệ thống quản lý công việc',
                text: 'Yêu cầu xác thực tài khoản đã đăng kí trên hệ thống với email là : ' + req.body.email,
                html:   
                        '<p>Tài khoản dùng để đăng nhập của bạn là : </p' + 
                        '<ul>' + 
                            '<li>Tài khoản :' + req.body.email + '</li>' +
                            '<li>Mật khẩu :' + password + '</li>' + 
                        '</ul>' + 
                        '<p>Đăng nhập ngay tại : </p>' + '<a href="http://localhost:3000/login"> ĐÂY</a>' + '<br>' +
                        '<p>Your account use to login in system : </p' + 
                        '<ul>' + 
                            '<li>Account :' + req.body.email + '</li>' +
                            '<li>Password :' + password + '</li>' + 
                        '</ul>' + 
                        '<p>Login now at : </p>' + '<a href="http://localhost:3000/login"> HERE</a>' + '<br>'
            }

            bcrypt.hash(password, salt, async(err, hash) => {
                if (err) throw err;
                var user = {
                    name: `SuperAdmin - ${req.body.name}`,
                    email: req.body.email,
                    password: hash
                };
                var user = await User.create(user);
                await UserRole.create({
                    id_user: [user._id],
                    id_role: role._id
                })
                await transporter.sendMail(mainOptions);
                console.log("Tao cong ty thanh cong")

                res.status(200).json({
                    msg: "Create company successfully",
                    company: com,
                    superadmin: role
                });
            });
        });

    } catch (error) {
        res.status(400).json({ msg: error});
    }
    
}

exports.edit = async (req, res) => {
    try {
        var com = await Company.findById(req.params.id);
        console.log("cty: ", com);
        console.log("data: ", req.body);
        com.name = req.body.name;
        com.description = req.body.description;
        com.save();

        res.status(200).json({
            msg: "Edit company successfully",
            company: com
        });
    } catch (error) {
        res.status(400).json({ msg: error});
    }
}