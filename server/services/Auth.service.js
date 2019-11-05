const User = require('../models/User.model');
const {registerValidation, loginValidation} = require('../validation/checkInputValue');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authLogger } = require('../logs');

exports.register = async (req, res) => {
    //validate the data
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message);

    //check if user is already in database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //create user
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try {
        res.status(200).send({
            user: user._id
        });
    } catch (error) {
        res.status(400).send(err);
    }
};

exports.login = async (req, res) => {
    try {
        //validate the data
        const {error} = loginValidation(req.body);
        if(error) return res.status(400).json({msg: error.details[0].message});

        //check if user is already in database
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).json({msg: 'Email invalid'});

        //check password
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).json({msg: 'Password invalid'});

        //create and assign a token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

        const roles = await UserRole.find({id_user: user._id});

        authLogger.info("Login :" + user.name + " : " + user.email);
        //tạo một state trên DB
        //viết mọt hàm mới bao logger cũ và reset việc ghi log
        //tạo biến private kiểm tra việc ghi log

        res.header('VNIST-Authentication-Token', token).status(200).send({
            token: token,
            id: user._id,
            name: user.name,
            email: user.email,
            roles: roles
        });
    } catch (error) {
        authLogger.error("Login Error");
        res.status.json({
            tag: "Error",
            msg: error
        })
    }
}

