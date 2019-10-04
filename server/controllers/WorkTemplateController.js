const WorkTemplateService = require('../services/WorkTemplate.service');

exports.get = (req, res) => {
    return WorkTemplateService.get(req, res);
};

exports.create = (req, res) => {
    return WorkTemplateService.create(req, res);
}
exports.getByJobTitle = (req, res) => {
    return WorkTemplateService.getByJobTitle(req, res);
}