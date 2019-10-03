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

exports.addUserToDeparment = async (req, res) => {
    try {
        var result = UserJobTitle.create({
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