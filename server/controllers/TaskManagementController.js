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

exports.getTaskCreatorByUser = (req, res) => {
    return TaskManagementService.getTaskCreatorByUser(req, res);
}

exports.getTaskAccounatableByUser = (req, res) => {
    return TaskManagementService.getTaskAccounatableByUser(req, res);
}

exports.getTaskConsultedByUser = (req, res) => {
    return TaskManagementService.getTaskConsultedByUser(req, res);
}

exports.getTaskInformedByUser = (req, res) => {
    return TaskManagementService.getTaskInformedByUser(req, res);
}

exports.getTaskResponsibleByUser = (req, res) => {
    return TaskManagementService.getTaskResponsibleByUser(req, res);
}

exports.create = (req, res) => {
    return TaskManagementService.create(req, res);
}

exports.delete = (req, res) => {
    return TaskManagementService.delete(req, res);
}