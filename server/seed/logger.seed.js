const Logger = require('../models/Logger.model');
const mongoose = require("mongoose");

// DB Config
const db = 'mongodb://localhost/qlcv';

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

Logger.create({
    log: false
})
.then(data => console.log(data))
.catch(err => console.log(err));