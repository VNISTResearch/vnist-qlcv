const Action = require('../../models/Action.model');
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



//1. Seed data permission---------------------------//
var actions = [
    {
        name: "ALL", //có mọi quyền
        see: true, 
        open: true, 
        edit: true,     
        delete: true,    
        enable: true,    
        disable: true
    },
    {//có thể nhìn thấy resource nhưng không thể xem chi tiết được, không thực hiện được action nào
        name: "OBSERVE",  
        see: true, 
        open: false,
        edit: false,     
        delete: false,    
        enable: false,    
        disable: false
    },
    {
        name: "READ",  //có quyền đọc
        see: true, 
        open: true,
        edit: false,     
        delete: false,    
        enable: false,    
        disable: false
    },
    {
        name: "WRITE", //có quyền ghi
        see: true,  
        open: true,
        edit: true,     
        delete: false,    
        enable: false,    
        disable: false
    },
];

Action.insertMany(actions, function(err, result){
    if(!err){
        console.log("Seed Action Data :\n" + result);
    }else{
        console.log(err);
    }
});