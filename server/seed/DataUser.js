const User = require('../models/User');
const Group = require('../models/Group');
const bcrypt = require("bcryptjs");

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
                    name: 'admin_vnist',
                    email: 'admin@vnist.com',
                    password: hash,
                    id_group: groups[0]._id
                },
                {
                    name: 'huybv',
                    email: 'huybv@vnist.com',
                    password: hash,
                    id_group: groups[1]._id
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
