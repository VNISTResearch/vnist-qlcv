const Role = require('../models/Role.model');
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

initRole = async () => {
    var admin = await Role.create({
        name: "Admin",
        abstract: []
    });
    var employee = await Role.create({
        name: "Employee",
        abstract: []
    });

    var vicedean = await Role.create({
        name: "Vice_Dean",
        abstract: []
    });

    var dean = await Role.create({
        name: "Dean",
        abstract: []
    });

    console.log("Load success Role Data: ", admin, dean, vicedean, employee);
}

try {
    initRole();
} catch (error) {
    console.log(error);
}