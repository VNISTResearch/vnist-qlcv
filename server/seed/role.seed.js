const Role = require('../models/Role.model');
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

initRole = async () => {
    var systemAdmin = await Role.create({
        name: "System Admin",
        abstract: []
    });

    var superAdmin = await Role.create({
        name: "Super Admin",
        abstract: []
    });

    var employee = await Role.create({
        name: "Employee",
        abstract: []
    });

    var vicedean = await Role.create({
        name: "Vice Dean",
        abstract: [employee]
    });

    var dean = await Role.create({
        name: "Dean",
        abstract: [employee, vicedean]
    });

    console.log("Load success Role Data: ", systemAdmin, superAdmin, dean, vicedean, employee);
}

try {
    initRole();
} catch (error) {
    console.log(error);
}