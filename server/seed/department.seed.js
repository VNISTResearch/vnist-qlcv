const Department = require('../models/Department.model');
const mongoose = require("mongoose");
ObjectId = require('mongodb').ObjectID;

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


  initDepartment = async () => {
    var banGiamDoc = await Department.create({
        name: "Ban Giám Đốc",
        parents: ObjectId('a00000000000000000000001')
    });

    var phongKeHoach = await Department.create({
        name: "Phòng Kinh Doanh",
        parents: banGiamDoc._id
    });

    var phongTaiChinh = await Department.create({
        name: "Phòng Đảm Bảo Chất Lượng",
        parents: banGiamDoc._id
    });

    var phongTaiChinh = await Department.create({
        name: "Phòng Sản Xuất",
        parents: banGiamDoc._id
    });

    var phongTaiChinh = await Department.create({
        name: "Phòng Tài Chính",
        parents: banGiamDoc._id
    });

    var phongNhanSu = await Department.create({
        name: "Phòng Nhân Sự",
        parents: banGiamDoc._id
    });

    var phongKyThuat = await Department.create({
        name: "Phòng Kỹ Thuật",
        parents: banGiamDoc._id
    });

    console.log("Load success Role Data: ", banGiamDoc, phongTaiChinh, phongKeHoach, phongNhanSu, phongKyThuat);
}

try {
    initDepartment();
} catch (error) {
    console.log(error);
}
// //1. Seed data permission---------------------------//
// var departments = [
//     {
//         name: 'Phòng Kế Hoạch'
//     },
//     {
//         name: 'Phòng Tài Chính'
//     },
//     {
//         name: 'Phòng Nhân Sự'
//     },
//     {
//         name: 'Phòng Kỹ Thuật'
//     }
// ];

// Department.insertMany(departments, function(err, result){
//     if(!err){
//         console.log("Seed Department Data :\n" + result);
//     }else{
//         console.log(err);
//     }
// });