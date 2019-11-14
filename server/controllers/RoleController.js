const RoleService = require('../services/Role.service');

exports.get = (req, res) => {
    return RoleService.get(req, res);
};

exports.getSuperRole = (req, res) => {
    return RoleService.getSuperRole(req, res);
};

exports.getRoleById = (req, res) => {
    return RoleService.getRoleById(req, res);
};

exports.getRoleOfUser = (req, res) => {
    return RoleService.getRoleOfUser(req, res);
};

exports.getRoleSameDepartment = (req, res) => {
    return RoleService.getRoleSameDepartment(req, res);
};

exports.getAdmins = (req, res) => {
    return RoleService.getAdmins(req, res);
};


exports.addAdmin = (req, res) => {
    return RoleService.addAdmin(req, res);
};

exports.create = (req, res) => {
    return RoleService.create(req, res);
};

exports.deleteRole = (req, res) => {
    return RoleService.deleteRole(req, res);
};

exports.assignRoleToUser = (req, res) => {
    return RoleService.assignRoleToUser(req, res);
};
