const AuthService = require('../services/AuthService');

exports.login = (req, res) => {
    return AuthService.login(req, res);
};

exports.register = (req, res) => {
    return AuthService.register(req, res);
};