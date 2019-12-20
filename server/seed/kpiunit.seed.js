const KPIUnit = require('../models/KPIUnit.model');
const KPIPersonal = require('../models/KPIPersonal.model');
const DetailKPIUnit = require('../models/DetailKPIUnit.model');
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
initKPIUnit = async () => {
    for (var i = 1; i < 12; i++) {
        // Thiết lập KPI cho ban giám đốc
        var kpiunit = await KPIUnit.create({
            unit: "5dcadedcf0343012f09c118f",
            creater: "5dcaddfdf0343012f09c1185",
            time: convertStringToDate(i + "-2019"),
            status: 2,
            listtarget: []
        })
        var targetA = await DetailKPIUnit.create({
            name: "Hoàn thành tốt vai trò quản lý (Vai trò người phê quyệt)",
            parent: null,
            weight: 20,
            criteria: "Hoàn thành tốt vai trò quản lý (Vai trò người phê quyệt)",
            default: 1,
            result: Math.floor(Math.random() * 5) + 15
        })
        kpiunit = await KPIUnit.findByIdAndUpdate(
            kpiunit, { $push: { listtarget: targetA._id }, $inc: { 'result': targetA.result } }, { new: true }
        );
        var targetC = await DetailKPIUnit.create({
            name: "Liên kết giữa các thành viên trong đơn vị (Vai trò người hỗ trợ)",
            parent: null,
            weight: 20,
            criteria: "Liên kết giữa các thành viên trong đơn vị (Vai trò người hỗ trợ)",
            default: 2,
            result: Math.floor(Math.random() * 5) + 15
        })
        kpiunit = await KPIUnit.findByIdAndUpdate(
            kpiunit, { $push: { listtarget: targetC._id }, $inc: { 'result': targetC.result } }, { new: true }
        );
        var target1 = await DetailKPIUnit.create({
            name: "Tăng doanh thu " + (Math.floor(Math.random() * 100) + 101),
            parent: null,
            weight: 30,
            criteria: "Tăng doanh thu " + (Math.floor(Math.random() * 100) + 101),
            default: 0,
            result: Math.floor(Math.random() * 5) + 25
        })
        kpiunit = await KPIUnit.findByIdAndUpdate(
            kpiunit, { $push: { listtarget: target1._id }, $inc: { 'result': target1.result } }, { new: true }
        );
        var target2 = await DetailKPIUnit.create({
            name: "Đảm bảo điều phối đủ nhân lực cho các đơn vị",
            parent: null,
            weight: 10,
            criteria: "Đảm bảo điều phối đủ nhân lực cho các đơn vị",
            default: 0,
            result: Math.floor(Math.random() * 8) + 2
        })
        kpiunit = await KPIUnit.findByIdAndUpdate(
            kpiunit, { $push: { listtarget: target2._id }, $inc: { 'result': target2.result } }, { new: true }
        );
        var target3 = await DetailKPIUnit.create({
            name: "Đảm bảo các nguồn lực cung cấp cho kinh doanh, sản xuất...",
            parent: null,
            weight: 20,
            criteria: "Đảm bảo các nguồn lực cung cấp cho kinh doanh, sản xuất...",
            default: 0,
            result: Math.floor(Math.random() * 5) + 10
        })
        kpiunit = await KPIUnit.findByIdAndUpdate(
            kpiunit, { $push: { listtarget: target3._id }, $inc: { 'result': target3.result } }, { new: true }
        );
        // Thiết lập KPI cho cá nhân (Trường phòng kinh doanh)
        var kpipersonal = await KPIPersonal.create({
            unit: "5dcadedcf0343012f09c118f",
            creater: "5dcade2bf0343012f09c1187",
            approver: "5dcaddfdf0343012f09c1185",
            time: convertStringToDate(i + "-2019"),
            systempoint: 0,
            mypoint: 0,
            approverpoint: 0,
            status: 3,
            listtarget: []
        })
        var targetAPersonal = await DetailKPIPersonal.create({
            name: "Hoàn thành tốt vai trò quản lý (Vai trò người phê quyệt)",
            parent: targetA._id,
            weight: 20,
            systempoint: Math.floor(Math.random() * 5) + 15,
            mypoint: Math.floor(Math.random() * 3) + 17,
            approverpoint: Math.floor(Math.random() * 5) + 15,
            criteria: "Hoàn thành tốt vai trò quản lý (Vai trò người phê quyệt)",
            default: 1,
            status: 3
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, {
            $push: { listtarget: targetAPersonal._id },
            $inc: {
                'systempoint': targetAPersonal.systempoint,
                "mypoint": targetAPersonal.mypoint,
                "approverpoint": targetAPersonal.approverpoint
            }}, { new: true });
        var targetCPersonal = await DetailKPIPersonal.create({
            name: "Liên kết giữa các thành viên trong đơn vị (Vai trò người hỗ trợ)",
            parent: targetC._id,
            weight: 20,
            systempoint: Math.floor(Math.random() * 5) + 15,
            mypoint: Math.floor(Math.random() * 3) + 17,
            approverpoint: Math.floor(Math.random() * 5) + 15,
            criteria: "Liên kết giữa các thành viên trong đơn vị (Vai trò người hỗ trợ)",
            default: 1,
            status: 3
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, {
            $push: { listtarget: targetCPersonal._id },
            $inc: {
                'systempoint': targetCPersonal.systempoint,
                "mypoint": targetCPersonal.mypoint,
                "approverpoint": targetCPersonal.approverpoint
            }}, { new: true });
        var target1Personal = await DetailKPIPersonal.create({
            name: "Giám sát kiểm tra chất lượng sản phẩm thuốc nước",
            parent: target3._id,
            weight: 20,
            systempoint: Math.floor(Math.random() * 5) + 15,
            mypoint: Math.floor(Math.random() * 3) + 17,
            approverpoint: Math.floor(Math.random() * 5) + 15,
            criteria: "Giám sát kiểm tra chất lượng sản phẩm thuốc nước",
            default: 1,
            status: 3
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, {
            $push: { listtarget: target1Personal._id },
            $inc: {
                'systempoint': target1Personal.systempoint,
                "mypoint": target1Personal.mypoint,
                "approverpoint": target1Personal.approverpoint
            }}, { new: true });
        var target2Personal = await DetailKPIPersonal.create({
            name: "Giám sát kiểm tra chất lượng sản phẩm thuốc viên",
            parent: target3._id,
            weight: 20,
            systempoint: Math.floor(Math.random() * 5) + 15,
            mypoint: Math.floor(Math.random() * 3) + 17,
            approverpoint: Math.floor(Math.random() * 5) + 15,
            criteria: "Giám sát kiểm tra chất lượng sản phẩm thuốc viên",
            default: 1,
            status: 3
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, {
            $push: { listtarget: target2Personal._id },
            $inc: {
                'systempoint': target2Personal.systempoint,
                "mypoint": target2Personal.mypoint,
                "approverpoint": target2Personal.approverpoint
            }}, { new: true });
        var target3Personal = await DetailKPIPersonal.create({
            name: "Đảm bảo hoàn thành kiểm tra sản phẩm hoàn trả",
            parent: target1._id,
            weight: 10,
            systempoint: Math.floor(Math.random() * 5) + 5,
            mypoint: Math.floor(Math.random() * 3) + 7,
            approverpoint: Math.floor(Math.random() * 5) + 5,
            criteria: "Đảm bảo hoàn thành kiểm tra sản phẩm hoàn trả",
            default: 1,
            status: 3
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, {
            $push: { listtarget: target3Personal._id },
            $inc: {
                'systempoint': target3Personal.systempoint,
                "mypoint": target3Personal.mypoint,
                "approverpoint": target3Personal.approverpoint
            }}, { new: true });
        var target4Personal = await DetailKPIPersonal.create({
            name: "Đảm bảo kiểm soát chất lượng sản phẩm tồn kho",
            parent: target3._id,
            weight: 10,
            systempoint: Math.floor(Math.random() * 5) + 5,
            mypoint: Math.floor(Math.random() * 3) + 7,
            approverpoint: Math.floor(Math.random() * 5) + 5,
            criteria: "Đảm bảo kiểm soát chất lượng sản phẩm tồn kho",
            default: 1,
            status: 3
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(
            kpipersonal, {
            $push: { listtarget: target4Personal._id },
            $inc: {
                'systempoint': target4Personal.systempoint,
                "mypoint": target4Personal.mypoint,
                "approverpoint": target4Personal.approverpoint
            }}, { new: true });
        // Thiết lập KPI cho phòng đảm bảo chất lượng
        var kpiunit2 = await KPIUnit.create({
            unit: "5dcadf02f0343012f09c1193",
            creater: "5dcade2bf0343012f09c1187",
            time: convertStringToDate(i + "-2019"),
            status: 2,
            listtarget: []
        })
        var targetA1 = await DetailKPIUnit.create({
            name: "Hoàn thành tốt vai trò quản lý (Vai trò người phê quyệt)",
            parent: targetA._id,
            weight: 20,
            criteria: "Hoàn thành tốt vai trò quản lý (Vai trò người phê quyệt)",
            default: 1,
            result: Math.floor(Math.random() * 5) + 15
        })
        kpiunit2 = await KPIUnit.findByIdAndUpdate(
            kpiunit2, { $push: { listtarget: targetA1._id }, $inc: { 'result': targetA1.result } }, { new: true }
        );
        var targetC1 = await DetailKPIUnit.create({
            name: "Liên kết giữa các thành viên trong đơn vị (Vai trò người hỗ trợ)",
            parent: targetC._id,
            weight: 20,
            criteria: "Liên kết giữa các thành viên trong đơn vị (Vai trò người hỗ trợ)",
            default: 2,
            result: Math.floor(Math.random() * 5) + 15
        })
        kpiunit2 = await KPIUnit.findByIdAndUpdate(
            kpiunit2, { $push: { listtarget: targetC1._id }, $inc: { 'result': targetC1.result } }, { new: true }
        );
        var target11 = await DetailKPIUnit.create({
            name: "Tăng doanh thu " + (Math.floor(Math.random() * 100) + 101),
            parent: target1._id,
            weight: 30,
            criteria: "Tăng doanh thu " + (Math.floor(Math.random() * 100) + 101),
            default: 0,
            result: Math.floor(Math.random() * 5) + 25
        })
        kpiunit2 = await KPIUnit.findByIdAndUpdate(
            kpiunit2, { $push: { listtarget: target11._id }, $inc: { 'result': target11.result } }, { new: true }
        );
        var target21 = await DetailKPIUnit.create({
            name: "Đảm bảo điều phối đủ nhân lực cho các đơn vị",
            parent: target2._id,
            weight: 10,
            criteria: "Đảm bảo điều phối đủ nhân lực cho các đơn vị",
            default: 0,
            result: Math.floor(Math.random() * 8) + 2
        })
        kpiunit2 = await KPIUnit.findByIdAndUpdate(
            kpiunit2, { $push: { listtarget: target21._id }, $inc: { 'result': target21.result } }, { new: true }
        );
        var target31 = await DetailKPIUnit.create({
            name: "Đảm bảo các nguồn lực cung cấp cho kinh doanh, sản xuất...",
            parent: target3._id,
            weight: 20,
            criteria: "Đảm bảo các nguồn lực cung cấp cho kinh doanh, sản xuất...",
            default: 0,
            result: Math.floor(Math.random() * 5) + 10
        })
        kpiunit2 = await KPIUnit.findByIdAndUpdate(
            kpiunit2, { $push: { listtarget: target31._id }, $inc: { 'result': target31.result } }, { new: true }
        );
    }
}

try {
    initKPIUnit();
} catch (error) {
    console.log(error);
}