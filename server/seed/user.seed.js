const User = require('../models/User.model');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// DB Config
const db = 'mongodb+srv://qlcv:thai135@cluster0-zqzcq.mongodb.net/test?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Seed data for user
var pw = '123456';
// Hash password before saving in database
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(pw, salt, (err, hash) => {
        if (err) throw err;
        var users = [
            {
                name: "super admin",
                email: "superadmin@gmail.com",
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