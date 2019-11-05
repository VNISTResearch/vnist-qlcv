const UserRole = require('../models/UserRole.model');
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

var ur = {
  id_user: ['5dbace5f412d9b12a04f063e'],
  id_role: '5dbad298524b981014cdf3de'
}

UserRole.create(ur)
  .then(res => console.log(res))
  .catch(err => console.log(err));