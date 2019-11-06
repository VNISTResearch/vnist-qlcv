const UserRole = require('../models/UserRole.model');
const User = require('../models/User.model');
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

initAdmin = async () => {
  try {
    var admin = await Role.findOne({name: 'Admin'});
    var user = await User.findOne({email: 'superadmin@gmail.com'});
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