const RoleService = require('../services/Role.service');

exports.get = (req, res) => {
    return RoleService.get(req, res);
};