const TaskManagementService = require('../services/TaskManagement.service');

exports.get = (req, res) => {
    return TaskManagementService.get(req, res);
}

exports.getById = (req, res) => {
    return TaskManagementService.getById(req, res);
}

exports.getByRole = (req, res) => {
    return TaskManagementService.getByRole(req, res);
}

exports.create = (req, res) => {
    return TaskManagementService.create(req, res);
}

exports.delete = (req, res) => {
    return TaskManagementService.delete(req, res);
}