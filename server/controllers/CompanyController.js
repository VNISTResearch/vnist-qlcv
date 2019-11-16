const CompanyService = require('../services/SystemManagement/Company.service');

exports.get = (req, res) => {
    return CompanyService.get(req, res);
};

exports.create = (req, res) => {
    return CompanyService.create(req, res);
};

