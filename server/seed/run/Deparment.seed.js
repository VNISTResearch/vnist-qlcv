const Deparment = require('../../models/Deparment.model');
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
var deparments = [
    {
        name: "Phòng 1"
    },
    {
        name: "Phòng 2"
    },
    {
        name: "Phòng 3"
    },
];

Deparment.insertMany(deparments, function(err, result){
    if(!err){
        console.log("Seed Deparment Data :\n" + result);
    }else{
        console.log(err);
    }
});


