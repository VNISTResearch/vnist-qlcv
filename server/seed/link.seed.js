const Link = require('../models/Link.model');
const mongoose = require("mongoose");

// DB Config
const db = 'mongodb://localhost/test';

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



//1. Seed data permission---------------------------//
var links = [
    {
        url: '/'
    },
    {
        url: '/admin/user'
    },
    {
        url: '/admin/department'
    },
    {
        url: '/admin/resource'
    },
    {
        url: '/admin/role'
    }
];
Link.insertMany(links, function(err, result){
    if(!err){
        console.log("Seed Link Data :\n" + result);
    }else{
        console.log(err);
    }
});