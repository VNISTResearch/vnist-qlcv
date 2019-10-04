const Department = require('../models/department.model');
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
var departments = [
    {
        name: 'Phòng Kế Hoạch'
    },
    {
        name: 'Phòng Tài Chính'
    },
    {
        name: 'Phòng Nhân Sự'
    },
    {
        name: 'Phòng Kỹ Thuật'
    }
];

Department.insertMany(departments, function(err, result){
    if(!err){
        console.log("Seed Department Data :\n" + result);
    }else{
        console.log(err);
    }
});