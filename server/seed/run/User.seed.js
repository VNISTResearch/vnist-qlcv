const User = require('../../models/User.model');
const Role = require('../../models/Role.model');
const JobTitle = require('../../models/JobTitle.model');
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// DB Config
const db = require("../../config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

var pw = 'vnist123'; //Set default seed data

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(pw, salt, (err, hash) => {
        if (err) throw err;
        //1. Seed data permission---------------------------//
        JobTitle.find().exec((err, jobtitles) => {
            Role.find().exec((err, roles) => {
                var users = [
                    {
                        name: "Nguyễn Văn A",
                        email: 'nva@gmail.com',
                        password: hash,
                        has: [
                            {
                                role: roles[0].id, // Role Trưởng Phòng
                                deparment: jobtitles[0].id  //Trưởng Phòng Phòng 1
                            },
                            {
                                role: roles[1].id, // Role Phó Phòng
                                deparment: jobtitles[4].id  //Phó Phòng Phòng 2
                            },
                            {
                                role: roles[2].id, // Role Nhân Viên
                                deparment: jobtitles[8].id  //Nhân Viên Phòng 3
                            },
                        ]
                    },
                    {
                        name: "Phạm Văn B",
                        email: 'pvb@gmail.com',
                        password: hash,
                        has: [
                            {
                                role: roles[0].id, // Role Trưởng Phòng
                                deparment: jobtitles[2].id  //Trưởng Phòng Phòng 3
                            },
                            {
                                role: roles[2].id, // Role Nhân Viên 
                                deparment: jobtitles[6].id  //Nhân Viên Phòng 1
                            },
                            {
                                role: roles[2].id, // Role Nhân Viên
                                deparment: jobtitles[7].id  //Nhân Viên Phòng 2
                            },
                        ]
                    },
                    {
                        name: "Trần Thị C",
                        email: 'ttc@gmail.com',
                        password: hash,
                        has: [
                            {
                                role: roles[2].id, // Role Nhân Viên
                                deparment: jobtitles[6].id  //Nhân Viên Phòng 1
                            },
                            {
                                role: roles[2].id, // Role Nhân Viên
                                deparment: jobtitles[7].id  //Nhân Viên Phòng 2
                            },
                        ]
                    },
                ];
                
                User.insertMany(users, function(err, result){
                    if(!err){
                        console.log("Seed User Data :\n" + result);
                    }else{
                        console.log(err);
                    }
                });        
            });
        });
    });
});






