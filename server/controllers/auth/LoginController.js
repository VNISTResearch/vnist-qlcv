const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const Group = require('../../models/Group');
const Role = require('../../models/Role');

// Load User model
const User = require("../../models/User");

module.exports = function (req, res) {
    // Form validation
    const Group = require('../../models/Group');
    var user_group = Group.find().exec(function(err, groups){
        return JSON.stringify(groups);
    });

    //console.log(result);
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email })
        .populate('id_group')
        .then(user => {
        // Check if user exists
        if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
        }
        Group.findById(user.id_group)
        .populate('id_role')
        .exec((err, group) => {
            if(!err){
                Role.findById(group.id_role)
                    .populate('id_permission')
                    .exec((err, role) => {
                        if(!err){
                            // Check password
                            bcrypt.compare(password, user.password).then(isMatch => {
                                if (isMatch) {
                                    // User matched
                                    // Create JWT Payload
                                    const payload = {
                                        id: user.id,
                                        name: user.name
                                    };

                                    // Sign token
                                    jwt.sign(
                                        payload,
                                        keys.secretOrKey,
                                        {
                                            expiresIn: 31556926 // 1 year in seconds
                                        },
                                        (err, token) => {
                                            res.json({
                                            success: true,
                                            token: "VNIST " + token,
                                            user: {
                                                    "name": user.name,
                                                    "email": user.email,
                                                    "group": {
                                                        group_info: user.id_group,
                                                        role: role
                                                    }
                                                }
                                            });
                                        }
                                    );
                                } else {
                                    return res
                                        .status(400)
                                        .json({ passwordincorrect: "Password incorrect" });
                                }
                            });
                        }
                    })
            }
        })
    });
};

  