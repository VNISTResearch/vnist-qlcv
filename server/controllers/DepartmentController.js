const DepartmentService = require('../services/Department.service');

exports.get = (req, res) => {
    return DepartmentService.get(req, res);
}

exports.create = (req, res) => {
    return DepartmentService.create(req, res);
}