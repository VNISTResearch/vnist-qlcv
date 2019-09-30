const PerCom = require('../models/PerCom');
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
var percoms = [
    {
        can: { //với chức danh tương ứng với quyền trưởng phòng XYZ
            seeFunction: true,
            openFunction: true,
            createForm: true,
            editForm: true,
            deleteForm: true,
        }
    },
    {
        can: { //với chức danh tương ứng với quyền phó phòng XYZ
            seeFunction: true,
            openFunction: true,
            createForm: false,
            editForm: true,
            deleteForm: true,
        }
    },
    {
        can: { //với chức danh tương ứng với quyền nhân viên XYZ
            seeFunction: true,
            openFunction: false,
            createForm: false,
            editForm: true,
            deleteForm: false,
        }
    }
];

PerCom.insertMany(percoms, function(err, result){
    if(!err){
        console.log("Seed PerCom Data :\n" + result);
    }else{
        console.log(err);
    }
});