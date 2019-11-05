const UserService = require('../services/User.service');

exports.get = (req, res) => {
    return UserService.get(req, res);
};

exports.getById = (req, res) => {
    return UserService.getById(req, res);
}

exports.getUsersSameDepartment = (req, res) => {
    return UserService.getUsersSameDepartment(req, res);
}

exports.create = (req, res) => {
    return UserService.create(req, res);
};

exports.createJobTitle = (req, res) => {
    return UserService.createJobTitle(req, res);
};

exports.edit = (req, res) => {
    return UserService.edit(req, res);
};

exports.delete = (req, res) => {
    return UserService.delete(req, res);
};