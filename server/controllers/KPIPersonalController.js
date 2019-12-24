const KPIPersonalService = require('../services/KPIPersonal.service');

// Điều phối đến các hàm thao tác với cơ sở dữ liệu của module quản lý kpi cá nhân
// get all target of personal kpi
exports.getKPIAllMember = (req, res) => {
    return KPIPersonalService.getKPIAllMember(req, res);
};
// get all target of personal kpi
exports.get = (req, res) => {
    return KPIPersonalService.get(req, res);
};
// Lấy KPI cá nhân theo tháng
exports.getByMonth = (req, res) => {
    return KPIPersonalService.getByMonth(req, res);
};

// get target of personal kpi by id
exports.getById = (req, res) => {
    return KPIPersonalService.getById(req, res);
}

// get kpi personal by user id
exports.getByUser = (req, res) => {
    return KPIPersonalService.getByUser(req, res);
}

// Khởi tạo KPI cá nhân
exports.create = (req, res) => {
    return KPIPersonalService.create(req, res);
}

// create new target of personal kpi
exports.createTarget = (req, res) => {
    return KPIPersonalService.createTarget(req, res);
}

// Chỉnh sửa thông tin chung của kpi cá nhân
exports.edit = (req, res) => {
    return KPIPersonalService.editById(req, res);
}

// Chỉnh sửa trạng thái của kpi cá nhân
exports.editStatusKPIPersonal = (req, res) => {
    return KPIPersonalService.editStatusKPIPersonal(req, res);
}

// xóa kpi cá nhân
exports.delete = (req, res) => {
    return KPIPersonalService.delete(req, res);
}

// Chỉnh sửa mục tiêu của kpi cá nhân
exports.editTarget = (req, res) => {
    return KPIPersonalService.editTarget(req, res);
}

// Phê duyệt từng mục tiêu của KPI
exports.editTatusTarget = (req, res) => {
    return KPIPersonalService.editTatusTarget(req, res);
}

// Phê duyệt tất cả mục tiêu của KPI
exports.approveAllTarget = (req, res) => {
    return KPIPersonalService.approveAllTarget(req, res);
}

// Đánh giá mục tiêu KPI
exports.evaluateTarget = (req, res) => {
    return KPIPersonalService.evaluateTarget(req, res);
}

// delete target of personal kpi
exports.deleteTarget = (req, res) => {
    return KPIPersonalService.deleteTarget(req, res);
}