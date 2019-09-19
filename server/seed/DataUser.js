const User = require('../models/User');
const Group = require('../models/Group');
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
            var users = [
                {
                    name: 'adminVnist',
                    email: 'adminV@vnist.com',
                    password: hash,
                    id_group: groups[1]._id //group 1_2
                },
                {
                    name: 'huybv97',
                    email: 'huybv97@vnist.com',
                    password: hash,
                    id_group: groups[5]._id //group 2-3
                },
                {
                    name: 'huyadmin',
                    email: 'huyadmin@vnist.com',
                    password: hash,
                    id_group: groups[2]._id
                },
                {
                    name: 'bvhuy',
                    email: 'bvhuy@vnist.com',
                    password: hash,
                    id_group: groups[2]._id
                },
                {
                    name: 'thai_vnist',
                    email: 'thai@vnist.com',
                    password: hash,
                    id_group: groups[0]._id
                }
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
    });
});
