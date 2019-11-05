const Role = require('../models/Role.model');

exports.role = async (req, res, next) => {
    const check = req.header('role'); //lấy role Dean
    if(!check) return res.status(401).send('Role Denied!');
    try {
        if(check !== "Dean") return res.status(401).send('Role Permission Denied!');
        next();
    } catch (error) {
        res.status(400).send(error);
    }   
}