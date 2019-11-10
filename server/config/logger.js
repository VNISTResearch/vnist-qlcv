const { authLogger, adminLogger } = require('../logs');
const Logger = require('../models/Logger.model');
const mongoose = require("mongoose");
const db = 'mongodb+srv://qlcv:thai135@cluster0-zqzcq.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
