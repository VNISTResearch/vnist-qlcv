const User = require('../models/user.model');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
        var users = [
            {
                name: "Nguyễn Văn Trưởng Phòng",
                email: "nvtp@gmail.com",
                password: hash
            },
            {
                name: "Nguyễn Văn Phó Phòng",
                email: "nvpp@gmail.com",
                password: hash
            },
            {
                name: "Trần Văn Nhân Viên",
                email: "tvnv@gmail.com",
                password: hash
            },
            {
                name: "Nguyễn Thị Nhân Viên",
                email: "ntnv@gmail.com",
                password: hash
            }
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
