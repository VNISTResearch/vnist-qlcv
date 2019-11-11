const UserRole = require('../models/UserRole.model');
const User = require('../models/User.model');
const Role = require('../models/Role.model');
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

initAdmin = async () => {
  try {
    var admin = await Role.findOne({name: 'System Admin'});
    var user = await User.findOne({email: 'systemAdmin@gmail.com'});
    var ur = await UserRole.create({
      id_user: user._id,
      id_role: admin._id
    });
    console.log(ur);
  } catch (error) {
    console.log(errror);
  }
}

initAdmin();