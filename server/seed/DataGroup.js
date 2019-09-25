const Group = require('../models/Group');
const Role = require('../models/Role');
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
Role.find().exec((err, role) => {
    if(!err){
        // console.log(role);
        var groups = [
            {
                name_group: "Group1_1",
                link: "",
                id_role: role[0]._id
            },
            {
                name_group: "Group1_2",
                id_role: role[1]._id
            },
            {
                name_group: "Group1_3",
                id_role: role[2]._id
            },
            {
                name_group: "Group2_1",
                id_role: role[0]._id
            },
            {
                name_group: "Group2_2",
                id_role: role[1]._id
            },
            {
                name_group: "Group2_3",
                id_role: role[2]._id
            },
            {
                name_group: "Group3_1",
                id_role: role[0]._id
            },
        ];

        Group.insertMany(groups, function(err, result){
            if(!err){
                console.log("Seed Group Data :\n" + result);
            }else{
                console.log(err);
            }
        });
    }else{
        console.log(err);
    }
});