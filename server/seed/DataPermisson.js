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



//1. Seed data permission---------------------------//
var pers = [
    {
        name: 'TP',
        url: [
            '/',
            '/cocautochuc'
        ],
        can: {
            seeFunction: true,
            openFunction: true,
            createForm: true,
            editForm: true,
            deleteForm: true,

        }
    },
    {
        name: 'PP',
        url: [
            '/',
            '/cocautochuc'
        ],
        can: {
            seeFunction: true,
            openFunction: true,
            createForm: false,
            editForm: true,
            deleteForm: false,
        }
    },
    {
        name: 'NV',
        url: [
            '/',
        ],
        can: {
            seeFunction: true,
            openFunction: false,
            createForm: false,
            editForm: true,
            deleteForm: false,
        }
    },
];

Permission.insertMany(pers, function(err, result){
    if(!err){
        console.log("Seed PermissionData :\n" + result);
    }else{
        console.log(err);
    }
});


