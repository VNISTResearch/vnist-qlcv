const Privilege = require('../models/Privilege.model');
const Role = require('../models/Role.model');
const Link = require('../models/Link.model');
const mongoose = require("mongoose");

// DB Config
const db = 'mongodb://localhost/qlcv';

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

initPrivileges = async() => {
    try {
        var role = await Role.findOne({ name: "System Admin"});
        var links = await Link.find();
        await links.map( link => {
            Privilege.create({
                resource: link._id,
                resource_type: "Link",
                role: [role._id]
            });
        })
    } catch (err) {
        console.log(err);
    }
}

initPrivileges();