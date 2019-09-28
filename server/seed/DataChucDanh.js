const ChucDanh = require('../models/ChucDanh');
const PerCom = require('../models/PerCom');
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
PerCom.find().exec((err, percom) => {
    var chucdanhs = [
        {
            name: 'Trưởng Phòng Kinh Doanh',
            percom: percom[0]
        },
        {
            name: 'Trưởng Phòng Kế Hoạch',
            percom: percom[0]
        },
        {
            name: 'Trưởng Phòng Tài Chính',
            percom: percom[0]
        },
        {
            name: 'Phó Phòng Kinh Doanh',
            percom: percom[1]
        },
        {
            name: 'Phó Phòng Kế Hoạch',
            percom: percom[1]
        },
        {
            name: 'Phó Phòng Tài Chính',
            percom: percom[1]
        },
        {
            name: 'Nhân Vien Kinh Doanh',
            percom: percom[2]
        },
        {
            name: 'Nhân Vien Kế Hoạch',
            percom: percom[2]
        },
        {
            name: 'Nhân Vien Tài Chính',
            percom: percom[2]
        },
    ];

    ChucDanh.insertMany(chucdanhs, function(err, result){
        if(!err){
            console.log("Seed GroupData :\n" + result);
        }else{
            console.log(err);
        }
    });
});