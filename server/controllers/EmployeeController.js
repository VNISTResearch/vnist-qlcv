const EmployeeService = require('../services/Employee.service');

// get all list employee
exports.get = (req, res) => {
    return EmployeeService.get(req, res);
}

// get imformation employee by employeeNumber
exports.getByEmployeeNumber = (req, res) => {
    return EmployeeService.getByEmployeeNumber(req, res);
}

// create a new employee
exports.create = (req, res) => {
    return EmployeeService.create(req, res);
}

// update information employee
exports.updateInformationEmployee = (req, res) => {
    return EmployeeService.updateByEmployeeNumber(req, res);
}