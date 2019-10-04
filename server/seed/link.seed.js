const Link = require('../models/link.model');
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



//1. Seed data permission---------------------------//
var links = [
    {
        url: '/'
    },
    {
        url: '/co_cau_to_chuc'
    },
    {
        url: '/mau_cong_viec'
    },
    {
        url: '/muc_tieu'
    }
];

Link.insertMany(links, function(err, result){
    if(!err){
        console.log("Seed Link Data :\n" + result);
    }else{
        console.log(err);
    }
});