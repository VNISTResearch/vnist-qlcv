const ComponentService = require('../services/Component.service');

exports.get = (req, res) => {
    return ComponentService.get(req, res);
};

exports.getComponentByRole = (req, res) => {
    return ComponentService.getComponentByRole(req, res);
};

