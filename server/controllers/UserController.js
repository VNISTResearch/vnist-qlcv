const UserService = require('../services/User.service');

exports.get = (req, res) => {
    return UserService.get(req, res);
};

exports.getById = (req, res) => {
    return UserService.getById(req, res);
}

exports.create = (req, res) => {
    return UserService.create(req, res);
};