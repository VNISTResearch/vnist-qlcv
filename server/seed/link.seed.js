const Link = require('../models/Link.model');
const mongoose = require("mongoose");

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



//1. Seed data permission---------------------------//
var links = [
    {
        url: '/'
    },
    {
        url: '/home'
    },
    {
        url: '/admin/user'
    },
    {
        url: '/admin/department'
    },
    {
        url: '/admin/resource/link'
    },
    {
        url: '/admin/resource/component'
    },
    {
        url: '/admin/role'
    },
    {
        url: '/task-template'
    }
];

Link.insertMany(links, function(err, result){
    if(!err){
        console.log("Seed Link Data :\n" + result);
    }else{
        console.log(err);
    }
});