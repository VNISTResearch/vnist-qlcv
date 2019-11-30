const Company = require('../../models/Company.model');
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



//1. Seed data permission---------------------------//
var coms = [
    {
        name: 'cong ty A',
        description: 'mo ta A'
    },
    {
        name: ' cong ty B',
        description: 'mo ta B'
    }
];
Company.insertMany(coms, function(err, result){
    if(!err){
        console.log("Seed Coms Data :\n" + result);
    }else{
        console.log(err);
    }
});