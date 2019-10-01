const JobTitle = require('../../models/JobTitle.model');
const Role = require('../../models/Role.model');
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

initJobTitle = async (roles, deparment) => {
    var tp = await JobTitle.create({
        name: roles[0].name + " " + deparment,
        parents: []
    });

    var pp = await JobTitle.create({
        name: roles[1].name + " " + deparment,
        parents: [tp._id]
    });

    var nv = await JobTitle.create({
        name: roles[2].name + " " + deparment,
        parents: [tp._id, pp._id]
    });
    console.log("Success Data JobTitle: ", tp, pp, nv);
}


//1. Seed data permission---------------------------//
Role.find().exec((err, roles) => {
    Deparment.find().exec((err, deparments) => {
        deparments.map(deparment => {
            initJobTitle(roles, deparment.name);
        });
    });
});