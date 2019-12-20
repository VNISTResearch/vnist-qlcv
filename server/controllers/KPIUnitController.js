const KPIUnitService = require('../services/KPIUnit.service');

// Điều phối đến các hàm dịch vụ cơ sở dữ liệu của module quản lý kpi đơn vị
// get all target of unit kpi
exports.get = (req, res) => {
    return KPIUnitService.get(req, res);
};

// get target of unit kpi by id
exports.getById = (req, res) => {
    return KPIUnitService.getById(req, res);
}

// Lấy KPI đơn vị hiện tại qua vai trò
exports.getByRole = (req, res) => {
    return KPIUnitService.getByRole(req, res);
}

// get all target of unit by unit id
exports.getByUnit = (req, res) => {
    return KPIUnitService.getByUnit(req, res);
}

// lấy KPI đơn vị của đơn vị cha
exports.getParentByUnit = (req, res) => {
    return KPIUnitService.getParentByUnit(req, res);
}

// Khởi tạo KPI đơn vị
exports.create = (req, res) => {
    return KPIUnitService.create(req, res);
}

// create new target of unit kpi
exports.createTarget = (req, res) => {
    return KPIUnitService.createTarget(req, res);
}

// Chỉnh sửa thông tin chung của kpi đơn vị
exports.edit = (req, res) => {
    return KPIUnitService.editById(req, res);
}

// Chỉnh sửa trạng thái của kpi đơn vị
exports.editStatusKPIUnit = (req, res) => {
    return KPIUnitService.editStatusKPIUnit(req, res);
}

// xóa kpi đơn vị
exports.delete = (req, res) => {
    return KPIUnitService.delete(req, res);
}

// Chỉnh sửa mục tiêu của kpi đơn vị
exports.editTargetById = (req, res) => {
    return KPIUnitService.editTargetById(req, res);
}

// delete target of unit kpi
exports.deleteTarget = (req, res) => {
    return KPIUnitService.deleteTarget(req, res);
}

// Cập nhật dữ liệu mới nhất cho KPI đơn vị
exports.evaluateKPI = (req, res) => {
    return KPIUnitService.evaluateKPI(req, res);
}