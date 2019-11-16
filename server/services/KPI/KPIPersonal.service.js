const KPIPersonal = require('../../models/KPIPersonal.model');
const KPIUnit = require('../../models/KPIUnit.model');

// get all kpi personal
exports.get = async (req, res) => {
    try {
        var kpipersonals = await KPIPersonal.find();

        res.json({
            message: "Lấy tất cả các mục tiêu kpi đơn vị thành công",
            content: kpipersonals
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// get kpi by id
exports.getById = async (req, res) => {
    try {
        var kpipersonal = await KPIPersonal.findById(req.params.id);

        res.json({
            message: "Lấy mục tiêu của kpi đơn vị theo id thành công",
            content: kpipersonal
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// get kpi by user id
exports.getByUser = async (req, res) => {
    try {
        var kpipersonals = await KPIPersonal.find({ creater: req.params.id, evaluate: false });
        res.json({
            message: "Lấy danh sách các mục tiêu hiện tại của kpi cá nhân",
            content: kpipersonals
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// get all parent kpi comfirmed but not evaluated by id unit
exports.getParentTarget = async (req, res) => {
    try {
        var parents = await KPIUnit.find({ unit: req.params.id, confirm: true, evaluate: false });
        res.json({
            message: "Lấy tất cả các mục tiêu cha của cá nhân",
            content: parents
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// create kpi
exports.create = async (req, res) => {
    try {
        var time = req.body.time.split("-");
        var date = new Date(time[1], time[0], 0)
        var kpipersonal = await KPIPersonal.create({
            unit: req.body.unit,
            creater: req.body.creater,
            approver: req.body.approver,
            name: req.body.name,
            parent: req.body.parent,
            time: date,
            weight: req.body.weight,
            criteria: req.body.criteria,
            confirm: false,
            approve: false,
            evaluate: false
        });

        res.json({
            message: "Thêm mới thành công một mục tiêu của cá nhân",
            kpipersonal: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Update kpi
exports.editById = async (req, res) => {
    try {
        var time = req.body.time.split("-");
        var date = new Date(time[1], time[0], 0)
        var objUpdate = {
            unit: req.body.unit,
            creater: req.body.creater,
            approver: req.body.approver,
            name: req.body.name,
            parent: req.body.parent,
            time: date,
            weight: req.body.weight,
            criteria: req.body.criteria,
            confirm: false,
            approve: false,
            evaluate: false
        }
        var kpipersonal = await KPIPersonal.findByIdAndUpdate(req.params.id, { $set: objUpdate }, { new: true });
        res.json({
            message: "Chỉnh sửa thành công một mục tiêu của đơn vị",
            kpipersonal: kpipersonal,
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Confirm KPI User: Request approve
exports.confirmByUserId = async (req, res) => {
    try {
        var kpipersonal = await KPIPersonal.updateMany({ user: req.params.id, unit: req.body.unit }, { $set: { confirm: true } });
        res.json({
            message: "Xác nhận kích hoạt kpi đơn vị thành công",
            content: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Approve KPI User
exports.approveByUserId = async (req, res) => {
    try {
        var kpipersonal = await KPIPersonal.updateMany({ user: req.params.id, unit: req.body.unit }, { $set: { approve: true } });
        res.json({
            message: "Phê duyệt kpi cá nhân thành công",
            content: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Request user edit personal kpi
exports.requestEditByUserId = async (req, res) => {
    try {
        var kpipersonal = await KPIPersonal.updateMany({ user: req.params.id, unit: req.body.unit }, { $set: { confirm: false } });
        res.json({
            message: "Yêu cầu chỉnh sửa kpi cá nhân thành công",
            content: kpipersonal
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Delete kpi target
exports.delete = async (req, res) => {
    try {
        var kpipersonal = await KPIPersonal.findByIdAndDelete(req.params.id);
        res.json({
            message: "Xóa thành công một mục tiêu của kpi cá nhân",
            kpipersonal: kpipersonal,
        });
    } catch (error) {
        res.json({ message: error });
    }
}