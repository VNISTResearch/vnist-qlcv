const User = require('../models/User.model');
const Role = require('../models/Role.model');
const bcrypt = require("bcryptjs");

exports.get = async (req, res) => {
    try {
        var result = await User.find();
        
        res.json(result);
    } catch (error) {

        res.json({ message: error });
    }
    console.log("Get Users");
};

exports.getById = async (req, res) => {
    try {
        var result = await User.findById(req.params.id);
        
        res.json(result);
    } catch (error) {

        res.json({ message: error });
    }
    console.log("Get Users By Id");
};

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
                    message: "Create user successfully!",
                    content: result
                });
            });
        });
    } catch (error) {
        res.json({ message: error });
    }
    console.log("Create User");
};

exports.createRole = async (req, res) => {
    try {
        var role = await UserRole.create({
            id_user: req.body.id_user,
            id_role: req.body.id_role
        });

        res.json({
            message: "Add role successfully!",
            content: role
        });
    } catch (error) {
        res.json({ message: error });
    }
};

exports.edit = async (req, res) => {
    try {
        var user = await User.updateOne(
            { _id: req.params.id }, //tìm user theo id
            { $set:{ name: req.body.name } } //update thông tin user
        );

        res.json({
            message: "Edit user successfully",
            content: user
        });
    } catch (error) {
        res.json({ message: error });
    }
};

exports.editRole = async (req, res) => {
    try {
        //code here  ...
    } catch (error) {
        res.json({ message: error });
    }
};

exports.delete = async (req, res) => {
    try {
        var user = await User.deleteOne({ _id: req.params.idUser });
        var role = await UserRole.deleteOne({ id_user: req.params.idUser });
        res.json({
            message: "Delete user successfully!",
            content: {
                user: user,
                role: role
            }
        });
    } catch (error) {
        res.json({ message: error });
    }
};