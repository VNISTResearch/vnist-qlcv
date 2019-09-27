const TypeTarget = require('../models/TypeTarget');
const mongoose = require("mongoose");

// DB Config
const db = require("../config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


//3. Seed data role -----------------------------//
var typeTargets = [
    {
        name: 'Tài chính'
    },
    {
        name: 'Quy trình nội bộ'
    },
    {
        name: 'Khách hàng'
    },
    {
        name: 'Đào tạo & phát triển'
    }
];

TypeTarget.insertMany(typeTargets, function(err, result){
    if(!err){
        console.log("Seed GroupData :\n" + result);
    }else{
        console.log(err);
    }
});