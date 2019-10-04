const WorkTemplateService = require('../services/WorkTemplate.service');

exports.get = (req, res) => {
    return WorkTemplateService.get(req, res);
}

exports.getById = (req, res) => {
    return WorkTemplateService.getById(req, res);
}

exports.getByJobTitle = (req, res) => {
    return WorkTemplateService.getByJobTitle(req, res);
}

exports.create = (req, res) => {
    return WorkTemplateService.create(req, res);
}

exports.delete = (req, res) => {
    return WorkTemplateService.delete(req, res);
}