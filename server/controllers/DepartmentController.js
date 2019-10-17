const DepartmentService = require('../services/Department.service');

exports.get = (req, res) => {
    return DepartmentService.getAll(req, res);
}

exports.create = (req, res) => {
    return DepartmentService.create(req, res);
}