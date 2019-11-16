const DepartmentService = require('../services/SystemManagement/Department.service');

exports.get = (req, res) => {
    return DepartmentService.get(req, res);
}

exports.getById = (req, res) => {
    return DepartmentService.getById(req, res);
}

exports.getRoleOfDepartment = (req, res) => {
    return DepartmentService.getRoleOfDepartment(req, res);
}

exports.getDepartmentInfo = (req, res) => {
    return DepartmentService.getDepartmentInfo(req, res);
}

exports.create = (req, res) => {
    return DepartmentService.create(req, res);
}

exports.createDepartment = (req, res) => {
    return DepartmentService.createDepartment(req, res);
}

exports.addUserWithRole = (req, res) => {
    return DepartmentService.addUserWithRole(req, res);
}

exports.addRoleForUser = (req, res) => {
    return DepartmentService.addRoleForUser(req, res);
}

exports.delete = (req, res) => {
    return DepartmentService.delete(req, res);
}

exports.testInput = (req, res) => {
    return DepartmentService.testInput(req, res);
}

exports.getDepartmentOfUser = (req, res) => {
    return DepartmentService.getDepartmentOfUser(req, res);
}
