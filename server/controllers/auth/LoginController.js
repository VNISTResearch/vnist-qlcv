git const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const Group = require('../../models/Group');
const Role = require('../../models/Role');
const Permission = require('../../models/Permission');

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
<<<<<<< HEAD
        .populate('id_group')
=======
        // .populate('id_group')
        .populate([{ path: 'id_group', populate: { path: 'id_role', populate: {path: 'id_permission'} }}])
>>>>>>> 907714e529fcb169d70c7ce56d764a5a26d6bed7
        .then(user => {
        // Check if user exists
        if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
        }
<<<<<<< HEAD
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
=======
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
                                user: user
                            })
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        })

        // Group.findById(user.id_group)
        // .populate('id_role')
        // .exec((err, group) => {
        //     if(!err){
        //         Role.findById(group.id_role)
        //             .populate('id_permission', )
        //             .exec((err, role) => {
        //                 if(!err){
        //                     // Check password
        //                     );
        //                 }
        //             })
        //     }
        // })
>>>>>>> 907714e529fcb169d70c7ce56d764a5a26d6bed7
    });
};

  