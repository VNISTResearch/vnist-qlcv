const DepartmentService = require('../services/Department.service');

exports.get = (req, res) => {
    return DepartmentService.get(req, res);
}

exports.getById = (req, res) => {
    return DepartmentService.getById(req, res);
}

exports.getRoleOfDepartment = (req, res) => {
    return DepartmentService.getRoleOfDepartment(req, res);
}

exports.create = (req, res) => {
    return DepartmentService.create(req, res);
}

exports.createRole = (req, res) => {
    return DepartmentService.createRole(req, res);
}

exports.delete = (req, res) => {
    return DepartmentService.delete(req, res);
}

exports.testInput = (req, res) => {
    return DepartmentService.testInput(req, res);
}
