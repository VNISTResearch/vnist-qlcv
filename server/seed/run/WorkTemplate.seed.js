const WorkTemplate = require('../../models/WorkTemplate.model');
const User = require('../../models/User.model');
const JobTitle = require('../../models/JobTitle.model');
const mongoose = require("mongoose");

// DB Config
const db = require("../../config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



//1. Seed data permission---------------------------//
var templates = [
    {

    },
];

WorkTemplate.insertMany(templates, function(err, result){
    if(!err){
        console.log("Seed WorkTemplate Data :\n" + result);
    }else{
        console.log(err);
    }
});


