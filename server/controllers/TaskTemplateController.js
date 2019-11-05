const TaskTemplateService = require('../services/TaskTemplate.service');

exports.get = (req, res) => {
    return TaskTemplateService.get(req, res);
}

exports.getById = (req, res) => {
    return TaskTemplateService.getById(req, res);
}

exports.getByRole = (req, res) => {
    return TaskTemplateService.getByRole(req, res);
}

exports.create = (req, res) => {
    return TaskTemplateService.create(req, res);
}

exports.delete = (req, res) => {
    return TaskTemplateService.delete(req, res);
}

exports.test = (req, res) => {
    return TaskTemplateService.test(req, res);
}