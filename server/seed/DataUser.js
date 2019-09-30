const User = require('../models/User');
const ChucDanh = require('../models/ChucDanh');
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
    ChucDanh.find().exec((err, chucdanhs) => {
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
                                    chucdanh: chucdanhs[0].id  //Trưởng Phòng Phòng Kinh Doanh
                                },
                                {
                                    role: roles[2].id, //Role Nhân Viên
                                    chucdanh: chucdanhs[7].id  //Nhân Viên Phòng Kế Hoạch
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
                                    chucdanh: chucdanhs[2].id  //Trưởng Phòng Tài Chính
                                },
                            ]
                        },
                        {
                            name: 'Pham Thi C',
                            email: 'ptc@gmail.com',
                            password: hash,
                            has: [
                                {
                                    role: roles[2].id, //Role Nhân Viên
                                    chucdanh: chucdanhs[8].id  //Nhân Viên Phòng Tài Chính
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
