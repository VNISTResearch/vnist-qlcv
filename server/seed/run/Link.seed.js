const Link = require('../../models/Link.model');
const mongoose = require("mongoose");

// DB Config
const db = require("../../config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



//1. Seed data permission---------------------------//
var links = [
    {
        url: [ //của trưởng phòng
            '/',
            '/cocautochuc', 
            '/WorkTemplate',
            '/muctieu'
        ]
    },
    {
        url: [ //của phó phòng
            '/',
            '/cocautochuc',
            '/WorkTemplate'
        ]
    },
    {
        url: [ //của nhân viên
            '/',
            '/WorkTemplate'
        ]
    },
];

Link.insertMany(links, function(err, result){
    if(!err){
        console.log("Seed Link Data :\n" + result);
    }else{
        console.log(err);
    }
});


