const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");

const User = require("../models/User");


//Handle for login and register service--------------------------//

//@Login Service
exports.login = (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email })
        .populate([
            {
                path: 'has.role', 
                populate:{
                    path: 'perlink'
                }
            },
            {
                path: 'has.chucdanh', 
                populate:{
                    path: 'percom'
                }
            },
        ])
        // .populate([{ path: 'id_group', populate: { path: 'id_role', populate: {path: 'id_permission'} }}])
        .then(user => {
        // Check if user exists
        if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
        }
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
    });
};

//@Register Service
exports.register = (req, res) => {

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

  