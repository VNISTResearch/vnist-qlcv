const User = require('../models/User.model');
const bcrypt = require("bcryptjs");
const UserJobTitle = require('../models/UserJobTitle.model');

exports.get = async (req, res) => {
    try {
        var result = await User.find();
        
        res.json(result);
    } catch (error) {

        res.json({ message: error });
    }
}

exports.getById = async (req, res) => {
    try {
        var result = await User.findById(req.params.id);
        
        res.json(result);
    } catch (error) {

        res.json({ message: error });
    }
}

exports.create = async (req, res) => {
    try {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(req.body.password, salt, async(err, hash) => {
                if (err) throw err;
                var user = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                };
                var result = await User.create(user);

                res.json({
                    message: "Tạo tài khoản thành công!",
                    content: result
                });
            });
        });
    } catch (error) {
        res.json({ message: error });
    }
}

exports.createJobTitle = async (req, res) => {
    try {
        var result = await UserJobTitle.create({
            user_id: req.body.user_id,
            jobTitle_id: req.body.jobTitle_id
        });

        res.json({
            message: "Thêm chức danh thành công!",
            content: result
        });
    } catch (error) {
        res.json({ message: error });
    }
}

exports.edit = async (req, res) => {
    try {
        var user = await User.updateOne(
            { _id: req.params.id }, //tìm user theo id
            { $set:{ name: req.body.name } } //update thông tin user
        );

        res.json({
            message: "Thêm chức danh thành công!",
            content: user
        });
    } catch (error) {
        res.json({ message: error });
    }
}

exports.editJobTitle = async (req, res) => {
    try {
        //code here  ...
    } catch (error) {
        res.json({ message: error });
    }
}

exports.delete = async (req, res) => {
    try {
        var user = await User.deleteOne({ _id: req.params.idUser });
        var userJobTitle = await UserJobTitle.deleteOne({ user_id: req.params.idUser });
        res.json({
            message: "Xóa thành công tài khoản!",
            content: {
                user: user,
                userJobTitle: userJobTitle
            }
        });
    } catch (error) {
        res.json({ message: error });
    }
}