const KPIPersonal = require('../models/KPIPersonal.model');
const Department = require('../models/Department.model');
const KPIUnit = require('../models/KPIUnit.model');
const DetailKPIPersonal = require('../models/DetailKPIPersonal.model');

// File này làm nhiệm vụ thao tác với cơ sở dữ liệu của module quản lý kpi cá nhân
// Lấy tất cả kpi cá nhân theo tháng
exports.getByMonth = async (req, res) => {
    try {
        var time = req.params.time.split("-");
        var month = new Date(time[1], time[0], 0);
        var kpipersonals = await KPIPersonal.findOne({ creater: req.params.id, time: month})
            .populate("unit creater approver")
            .populate({ path: "listtarget", populate: { path: 'parent' } });
        res.json({
            message: "Lấy tất cả các mục tiêu kpi cá nhân thành công",
            content: kpipersonals
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Lấy tất cả KPI cá nhân hiện tại của một phòng ban
exports.getKPIAllMember = async (req, res) => {
    try {
        var department = await Department.findOne({
            $or: [
                { 'dean': req.params.role },
                { 'vice_dean': req.params.role },
                { 'employee': req.params.role }
            ]
        });
        var kpipersonals;
        var starttime = req.params.starttime.split("-");
        var startdate = new Date(starttime[1], starttime[0], 0);
        var endtime = req.params.endtime.split("-");
        var enddate = new Date(endtime[1], endtime[0], 28);
        var status = parseInt(req.params.status);
        console.log(enddate);
        if (req.params.user === "all") {
            if (status===5) {
                kpipersonals = await KPIPersonal.find({ 
                    unit: department._id, 
                    time: {"$gte": startdate, "$lt": enddate} 
                }).skip(0).limit(12).populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } });
            } else if(status===4){
                kpipersonals = await KPIPersonal.find({ 
                    unit: department._id, 
                    status: { $ne: 3 }, 
                    time: {"$gte": startdate, "$lt": enddate} 
                }).skip(0).limit(12).populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } });
            } else {
                kpipersonals = await KPIPersonal.find({ 
                    unit: department._id, 
                    status: status, 
                    time: {"$gte": startdate, "$lt": enddate} 
                }).skip(0).limit(12).populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } });
            }
        } else {
            if (status===5) {
                kpipersonals = await KPIPersonal.find({ 
                    unit: department._id, 
                    creater: req.params.user,
                    time: {"$gte": startdate, "$lt": enddate} 
                }).skip(0).limit(12).populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } });
            } else if(status===4){
                kpipersonals = await KPIPersonal.find({ 
                    unit: department._id, 
                    creater: req.params.user,
                    status: { $ne: 3 }, 
                    time: {"$gte": startdate, "$lt": enddate} 
                }).skip(0).limit(12).populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } });
            } else {
                kpipersonals = await KPIPersonal.find({ 
                    unit: department._id, 
                    creater: req.params.user,
                    status: status, 
                    time: {"$gte": startdate, "$lt": enddate} 
                }).skip(0).limit(12).populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } });
            }
        }
        res.json({
            message: "Tìm kiếm KPI nhân viên thành công",
            content: kpipersonals
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Lấy tất cả KPI cá nhân theo người thiết lập
exports.getByMember = async (req, res) => {
    try {
        var kpipersonals = await KPIPersonal.find({ creater: { $in: req.params.member.split(",") } })
            .sort({ 'time': 'desc' })
            .populate("unit creater approver")
            .populate({ path: "listtarget"});
        res.json({
            message: "Lấy tất cả các mục tiêu kpi cá nhân thành công",
            content: kpipersonals
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Lấy tất cả KPI cá nhân của người thực hiện trong công việc
exports.getKPIResponsible = async (req, res) => {
    try {
        var kpipersonals = await KPIPersonal.find({ creater: { $in: req.params.member.split(",") }, status: { $ne: 3 } })
            .populate("unit creater approver")
            .populate({ path: "listtarget"});
        res.json({
            message: "Lấy tất cả các mục tiêu kpi cá nhân thành công",
            content: kpipersonals
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Lấy kpi cá nhân theo id
exports.getById = async (req, res) => {
    try {
        var kpipersonal = await KPIPersonal.findById(req.params.id)
            .populate("unit creater approver")
            .populate({ path: "listtarget", populate: { path: 'parent' } });
        res.json({
            message: "Lấy kpi cá nhân theo id thành công",
            content: kpipersonal
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// Lấy kpi hiện tại cá nhân theo người dùng
exports.getByUser = async (req, res) => {
    try {
        var kpipersonals = await KPIPersonal.findOne({ creater: req.params.id, status: { $ne: 3 } })
            .populate("unit creater approver")
            .populate({ path: "listtarget", populate: { path: 'parent' } });
        res.json({
            message: "Lấy danh sách các mục tiêu hiện tại của kpi cá nhân",
            content: kpipersonals
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Khởi tạo KPI cá nhân
exports.create = async (req, res) => {
    try {
        var message = "Khởi tạo thành công KPI cá nhân";
        var time = req.body.time.split("-");
        var date = new Date(time[1], time[0], 0);
        // Tạo thông tin chung cho KPI cá nhân
        var kpipersonal = await KPIPersonal.create({
            unit: req.body.unit,
            creater: req.body.creater,
            approver: req.body.approver,
            time: date,
            listtarget: []
        });
        // Tìm kiếm danh sách các mục tiêu mặc định của phòng ban
        var kpiUnit = await KPIUnit.findOne({ unit: req.body.unit, status: 1 }).populate("listtarget");
        var defaultKPIUnit;
        if (kpiUnit.listtarget) defaultKPIUnit = kpiUnit.listtarget.filter(item => item.default !== 0);
        if (defaultKPIUnit !== []) {
            var defaultKPIUnit = await Promise.all(defaultKPIUnit.map(async (item) => {
                var defaultT = await DetailKPIPersonal.create({
                    name: item.name,
                    parent: item._id,
                    weight: 5,
                    criteria: item.criteria,
                    default: item.default
                })
                return defaultT._id;
            }))
            kpipersonal = await KPIPersonal.findByIdAndUpdate(
                kpipersonal, { listtarget: defaultKPIUnit }, { new: true }
            );
        } else {
            message = "Chưa thiết lập KPI đơn vị";
        }
        kpipersonal = await kpipersonal.populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } }).execPopulate();
        res.json({
            message: message,
            kpipersonal: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Thêm mục tiêu cho KPI cá nhân
exports.createTarget = async (req, res) => {
    try {
        // Thiết lập mục tiêu cho KPI cá nhân
        var target = await DetailKPIPersonal.create({
            name: req.body.name,
            parent: req.body.parent,
            weight: req.body.weight,
            criteria: req.body.criteria
        })
        var kpipersonal = await KPIPersonal.findByIdAndUpdate(
            req.body.kpipersonal, { $push: { listtarget: target._id } }, { new: true }
        );
        kpipersonal = await kpipersonal.populate('creater approver unit').populate({ path: "listtarget", populate: { path: 'parent' } }).execPopulate();
        res.json({
            message: "Thêm mới thành công một mục tiêu của kpi cá nhân",
            kpipersonal: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Chỉnh sửa mục tiêu của KPI cá nhân
exports.editTarget = async (req, res) => {
    try {
        var objUpdate = {
            name: req.body.name,
            parent: req.body.parent,
            weight: req.body.weight,
            criteria: req.body.criteria
        }
        var target = await DetailKPIPersonal.findByIdAndUpdate(req.params.id, { $set: objUpdate }, { new: true }).populate("parent");
        res.json({
            message: "Chỉnh sửa thành công một mục tiêu của cá nhân",
            target: target
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Xóa mục tiêu của KPI cá nhân
exports.deleteTarget = async (req, res) => {
    try {
        var target = await DetailKPIPersonal.findByIdAndDelete(req.params.id);
        var kpipersonal = await KPIPersonal.findByIdAndUpdate(req.params.kpipersonal, { $pull: { listtarget: req.params.id } }, { new: true });
        kpipersonal = await kpipersonal.populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } }).execPopulate();
        res.json({
            message: "Xóa thành công một mục tiêu của cá nhân",
            kpipersonal: kpipersonal,
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Chỉnh sửa trạng thái KPI: yêu cầu phê duyệt, hủy bỏ yêu cầu phê duyệt, khóa KPI
exports.editStatusKPIPersonal = async (req, res) => {
    try {
        var kpipersonal = await KPIPersonal.findByIdAndUpdate(req.params.id, { $set: { status: req.params.status } }, { new: true });
        kpipersonal = await kpipersonal.populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } }).execPopulate();
        res.json({
            message: "Xác nhận yêu cầu phê duyệt thành công",
            kpipersonal: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Phê duyệt từng mục tiêu
exports.editStatusTarget = async (req, res) => {
    try {
        var target = await DetailKPIPersonal.findByIdAndUpdate(req.params.id, { $set: { status: req.params.status } }, { new: true });
        var kpipersonal = await KPIPersonal.findOne({listtarget: { $in: req.params.id }}).populate("listtarget");
        var listtarget = kpipersonal.listtarget;
        var checkFullApprove = 2;
        await listtarget.map(item=>{
            if(item.status===null||item.status===0){
                if(parseInt(req.params.status) === 1){
                    checkFullApprove = 1;
                } else {
                    checkFullApprove = 0;
                }
            }
            return true;
        })
        kpipersonal = await KPIPersonal.findByIdAndUpdate(kpipersonal._id, {$set: {status: checkFullApprove}}, { new: true })
            .populate("unit creater approver")
            .populate({ path: "listtarget", populate: { path: 'parent' } });
        res.json({
            message: "Phê duyệt mục tiêu thành công",
            newKPI: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Phê duyệt tất cả các mục tiêu
exports.approveAllTarget = async (req, res) => {
    try {
        var kpipersonal = await KPIPersonal.findByIdAndUpdate(req.params.id, { $set: { status: 2 } }, { new: true });
        var targets;
        if (kpipersonal.listtarget) targets = kpipersonal.listtarget;
        if (targets !== []) {
            var targets = await Promise.all(targets.map(async (item) => {
                var defaultT = await DetailKPIPersonal.findByIdAndUpdate(item._id, { $set: { status: 1 } }, { new: true })
                return defaultT;
            }))
        }
        kpipersonal = await kpipersonal.populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } }).execPopulate();
        res.json({
            message: "Xác nhận yêu cầu phê duyệt thành công",
            kpipersonal: kpipersonal,
            listtarget: targets
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Đánh giá kết quả kpi cá nhân
exports.evaluateTarget = async (req, res) => {
    try {
        var objUpdate = {
            systempoint: req.body.systempoint,
            mypoint: req.body.mypoint,
            approverpoint: req.body.approverpoint,
        }
        var target = await DetailKPIPersonal.findByIdAndUpdate(req.params.id, { $set: objUpdate }, { new: true });
        // Real Time (Khi nào hệ thống đủ lớn thì nên làm) Mỗi lần KPI cá nhân được đánh giá thì kết quả KPI đơn vị sẽ được cập nhật 
        // Đồng thời kết quả KPI đơn vị cha của đơn vị đó cũng sẽ cập nhật (Cho đến khi không còn KPI đơn vị cha)
        // Tính luôn điểm của KPI cá nhân để giảm số lượng thao tác mỗi lần load dữ liệu
        var kpipersonal = await KPIPersonal.findOne({ listtarget: { $in: req.params.id } }).populate('listtarget');
        var listtarget, counttarget, totalpoint, kpipoint;
        if (kpipersonal.listtarget) {
            listtarget = kpipersonal.listtarget;
            counttarget = kpipersonal.listtarget.length;
        }
        if (listtarget) {
            totalapproverpoint = listtarget.reduce((sum, item) => sum + item.approverpoint, 0);
            totalmypoint = listtarget.reduce((sum, item) => sum + item.mypoint, 0);
            totalsystempoint = listtarget.reduce((sum, item) => sum + item.systempoint, 0);
            kpiapproverpoint = Math.round((totalapproverpoint / counttarget) * 10) / 10;
            kpimypoint = Math.round((totalmypoint / counttarget) * 10) / 10;
            kpisystempoint = Math.round((totalsystempoint / counttarget) * 10) / 10;
        }
        kpipersonal = await KPIPersonal.findByIdAndUpdate(kpipersonal._id, { $set: { approverpoint: kpiapproverpoint, mypoint: kpimypoint, systempoint: kpisystempoint } }, { new: true });
        kpipersonal = await kpipersonal.populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } }).execPopulate();
        res.json({
            message: "Đánh giá mục tiêu thành công",
            newTarget: target,
            kpipersonal: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Chỉnh sửa thông tin chung của KPI cá nhân
exports.editById = async (req, res) => {
    try {
        var time = req.body.time.split("-");
        var date = new Date(time[1], time[0], 0)
        var kpipersonal = await KPIPersonal.findByIdAndUpdate(req.params.id, { $set: { time: date } }, { new: true });
        kpipersonal = await kpipersonal.populate("unit creater approver").populate({ path: "listtarget", populate: { path: 'parent' } }).execPopulate();
        res.json({
            message: "Chỉnh sửa thành công KPI của cá nhân",
            kpipersonal: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Xóa toàn bộ KPI cá nhân
exports.delete = async (req, res) => {
    try {
        var listTarget = [];
        var kpipersonal = await KPIPersonal.findById(req.params.id);
        if (kpipersonal.listtarget) listTarget = kpipersonal.listtarget;
        if (listTarget !== []) {
            listTarget = await Promise.all(listTarget.map(async (item) => {
                return DetailKPIPersonal.findByIdAndDelete(item._id);
            }))
        }
        kpipersonal = await KPIPersonal.findByIdAndDelete(req.params.id);
        res.json({
            message: "Xóa thành công một mục tiêu của cá nhân",
            kpipersonal: kpipersonal,
            listtarget: listTarget
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Xóa toàn bộ mục tiêu của KPI