const Department = require('../models/department.model');
const JobTitle = require('../models/jobTitle.model');
const Role = require('../models/role.model');
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

initJobTitle = async (department, roles) => {
    var jobTitles = [
        {
            name: roles[0].name + " " + department.name, //trưởng phòng phòng ...
            role: roles[0]._id,
            department: department._id
        },
        {
            name: roles[1].name + " " + department.name, //phó phòng phòng ...
            role: roles[1]._id,
            department: department._id
        },
        {
            name: roles[2].name + " " + department.name, //nhân viên phòng ...
            role: roles[2]._id,
            department: department._id
        },
    ];

    try {
        await JobTitle.insertMany(jobTitles, function(err, result){
            if(!err){
                console.log("Seed JobTitle Data :\n" + result);
            }else{
                console.log(err);
            }
        });
    } catch (error) {
        
    }
}

Department.find().exec((err, departments) => {
    Role.find().exec((err, roles) => {
        departments.map(department => {
            initJobTitle(department, roles);
        });
    });
});