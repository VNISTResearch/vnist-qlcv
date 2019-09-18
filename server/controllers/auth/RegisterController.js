const validateRegisterInput = require("../../validation/register");
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../../models/User");
const Group = require('../../models/Group');
const Role = require("../../models/Role");
const Permission = require('../../models/Permission');

module.exports = function (req, res) {

    //1. Add information for account-------------------------------//

    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors); //check validate
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
        return res.status(400).json({ email: "Email already exists" });
        } else {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            id_group: req.body.id_group
        });

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
        });
        }
    });
};