const SystemService = require('../../services/SystemManagement/System.service');

exports.toggleLogger = (req, res) => {
    return SystemService.toggleLogger(req, res);
};