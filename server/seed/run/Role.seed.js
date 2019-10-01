const Link = require('../../models/Link.model');
const Role = require('../../models/Role.model');
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
Link.find().exec((err, links) => {
    var roles = [
        {
            name: "Trưởng Phòng",
            access: links[0]._id
        },
        {
            name: "Phó Phòng",
            access: links[1]._id
        },
        {
            name: "Nhân Viên",
            access: links[2]._id
        },
    ];

    Role.insertMany(roles, function(err, result){
        if(!err){
            console.log("Seed Role Data :\n" + result);
        }else{
            console.log(err);
        }
    });
});