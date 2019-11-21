const User = require('../../models/User.model');
const {registerValidation, loginValidation} = require('../../validation/checkInputValue');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authLogInfo, authLogError } = require('../../logs/Auth/AuthLogger');

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
        const {error} = loginValidation(req.body);
        if(error) return res.status(400).json({msg: error.details[0].message});
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).json({msg: 'Email invalid'});
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) {
            if(user.active) user.status = user.status + 1;
            if(user.status > 5){
                user.active = false;
                user.status = 0;
                user.save();
                return res.status(400).json({ msg: 'Enter the wrong password more than 5 times. The account has been locked.'});
            }
            user.save();
            return res.status(400).json({msg: 'Password invalid'});
        }
        if(!user.active) return res.status(400).json({ msg: ' Cannot login! The account has been locked !'});
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        const roles = await UserRole.find({id_user: user._id});
        user.status = 0; 
        user.save();

        authLogInfo();
        res.header('VNIST-Authentication-Token', token).status(200).send({
            token: token,
            id: user._id,
            name: user.name,
            email: user.email,
            roles: roles
        });
    } catch (error) {
        authLogError();
        res.status.json({
            msg: "Login error"
        })
    }
}

