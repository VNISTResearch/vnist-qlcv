const LinkService = require('../services/Link.service');

exports.get = (req, res) => {
    return LinkService.get(req, res);
};

exports.getById = (req, res) => {
    return LinkService.getById(req, res);
};

exports.getLinkByRole = (req, res) => {
    return LinkService.getLinkByRole(req, res);
};

exports.create = (req, res) => {
    return LinkService.create(req, res);
};

exports.addRoleToLink = (req, res) => {
    return LinkService.addRoleToLink(req, res);
};
