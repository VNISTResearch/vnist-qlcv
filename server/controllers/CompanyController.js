const CompanyService = require('../services/Company.service');

exports.get = (req, res) => {
    return CompanyService.get(req, res);
};

exports.create = (req, res) => {
    return CompanyService.create(req, res);
};

