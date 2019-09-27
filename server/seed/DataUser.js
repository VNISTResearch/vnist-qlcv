const User = require('../models/User');
const Group = require('../models/Group');
const Role = require('../models/Role');
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// DB Config
const db = require("../config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Seed data for user
var pw = 'vnist123';
// Hash password before saving in database
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(pw, salt, (err, hash) => {
    if (err) throw err;
    // newUser.password = hash;
    Group.find().exec((err, groups) => {
        if(!err){
           Role.find().exec((err, roles) => {
                if(!err){
                    var users = [
                        {
                            name: 'Nguyen Van A',
                            email: 'nva@gmail.com',
                            password: hash,
                            has: [
                                {
                                    role: roles[0].id, // Role Trưởng Phòng
                                    group: groups[0].id  //Phong Kinh Doanh
                                },
                                {
                                    role: roles[2].id, //Role Nhân Viên
                                    group: groups[2].id  //Phòng Kế Hoạch
                                },
                            ]
                        },
                        {
                            name: 'Pham Van B',
                            email: 'pvb@gmail.com',
                            password: hash,
                            has: [
                                {
                                    role: roles[0].id, //Role Trưởng Phòng
                                    group: groups[2].id  //Phòng Kế Hoạch
                                },
                            ]
                        },
                    ];

                    User.insertMany(users, function(err, result){
                        if(!err){
                            console.log("Seed GroupData :\n" + result);
                        }else{
                            console.log(err);
                        }
                    });
                }else{
                    console.log(err);
                }
           });
        }else{
            console.log(err);
        }
    });
    });
});
