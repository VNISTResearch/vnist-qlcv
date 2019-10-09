const User = require('../models/User.model');
const {registerValidation, loginValidation} = require('../validation/checkInputValue');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    //validate the data
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

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
        res.send({
            user: user._id
        });
    } catch (error) {
        res.status(400).send(err);
    }
};

exports.login = async (req, res) => {
    //validate the data
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //check if user is already in database
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email not found');

    //check password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Password is wrong');

    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

    res.header('auth-token', token).send(token);
}

