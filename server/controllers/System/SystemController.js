const SystemService = require('../../services/SystemManagement/System.service');

exports.reset = (req, res) => {
    return SystemService.reset(req, res);
};