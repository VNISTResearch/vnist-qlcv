const FormcvService = require('../services/FormcvService');

exports.getAllForm = (req, res) => {
    return FormcvService.getAllForm(req, res);
}

exports.getFormByIdUser = (req, res) => {
    return FormcvService.getFormByIdUser(req, res);
}