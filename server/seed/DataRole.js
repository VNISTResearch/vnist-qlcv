const Role = require('../models/Role');
const Permission = require('../models/Permission');
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


//2. Seed data role -----------------------------//
Permission.find().exec((err, per) => {
    if(!err){
        var roles = [
            {
                name: 'TP',
                permission: per[0]._id
            },
            {
                name: 'PP',
                permission: per[1]._id
            },
            {
                name: 'NV',
                permission: per[2]._id
            },
        ];
        
        Role.insertMany(roles, function(err, result){
            if(!err){
                console.log("Seed Role Data :\n" + result);
            }else{
                console.log(err);
            }
        });
    }else{
        console.log(err);
    }
});
