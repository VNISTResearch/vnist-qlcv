const EmployeeService = require('../services/Employee.service');

// get all list employee
exports.get = (req, res) => {
    return EmployeeService.get(req, res);
}

// create a new employee
exports.create = (req, res) => {
    return EmployeeService.create(req, res);
}