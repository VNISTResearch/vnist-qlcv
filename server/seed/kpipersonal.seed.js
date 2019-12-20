const KPIPersonal = require('../models/KPIPersonal.model');
const DetailKPIPersonal = require('../models/DetailKPIPersonal.model');
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
convertStringToDate = (time) => {
    var date = time.split("-");
    return new Date(date[1], date[0], 0);
}
initKPIPersonal = async () => {
    for (var i = 1; i < 12; i++) {
        var kpipersonal = await KPIPersonal.create({
            unit: "5dcadedcf0343012f09c118f",
            creater: "5dcaddfdf0343012f09c1185",
            time: convertStringToDate(i+"-2019"),
            status: 2,
            listtarget: []
        })
        var targetA = await DetailKPIPersonal.create({
            name: "Hoàn thành tốt vai trò quản lý (Vai trò người phê quyệt)",
            parent: null,
            weight: 20,
            criteria: "Hoàn thành tốt vai trò quản lý (Vai trò người phê quyệt)",
            default: 1,
            result: Math.floor(Math.random() * 5) + 15
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, { $push: { listtarget: targetA._id }, $inc: { 'result': targetA.result} }, { new: true }
        );
        var targetC = await DetailKPIPersonal.create({
            name: "Liên kết giữa các thành viên trong đơn vị (Vai trò người hỗ trợ)",
            parent: null,
            weight: 20,
            criteria: "Liên kết giữa các thành viên trong đơn vị (Vai trò người hỗ trợ)",
            default: 2,
            result: Math.floor(Math.random() * 5) + 15
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, { $push: { listtarget: targetC._id }, $inc: { 'result': targetC.result} }, { new: true }
        );
        var target1 = await DetailKPIPersonal.create({
            name: "Tăng doanh thu "+(Math.floor(Math.random() * 100) + 101),
            parent: null,
            weight: 30,
            criteria: "Tăng doanh thu "+(Math.floor(Math.random() * 100) + 101),
            default: 0,
            result: Math.floor(Math.random() * 5) + 25
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, { $push: { listtarget: target1._id }, $inc: { 'result': target1.result} }, { new: true }
        );
        var target2 = await DetailKPIPersonal.create({
            name: "Đảm bảo điều phối đủ nhân lực cho các đơn vị",
            parent: null,
            weight: 10,
            criteria: "Đảm bảo điều phối đủ nhân lực cho các đơn vị",
            default: 0,
            result: Math.floor(Math.random() * 8)+2
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, { $push: { listtarget: target2._id }, $inc: { 'result': target2.result} }, { new: true }
        );
        var target3 = await DetailKPIPersonal.create({
            name: "Đảm bảo các nguồn lực cung cấp cho kinh doanh, sản xuất...",
            parent: null,
            weight: 20,
            criteria: "Đảm bảo các nguồn lực cung cấp cho kinh doanh, sản xuất...",
            default: 0,
            result: Math.floor(Math.random() * 5) + 10
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, { $push: { listtarget: target3._id }, $inc: { 'result': target3.result} }, { new: true }
        );
    }
}

try {
    initKPIPersonal();
} catch (error) {
    console.log(error);
}