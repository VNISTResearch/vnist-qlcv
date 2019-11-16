const KPIPersonalService = require('../services/KPI/KPIPersonal.service');

// get all target of personal kpi
exports.get = (req, res) => {
    return KPIPersonalService.get(req, res);
};

// get target of personal kpi by id
exports.getById = (req, res) => {
    return KPIPersonalService.getById(req, res);
}

// get all target of personal by personal id
exports.getByUser = (req, res) => {
    return KPIPersonalService.getByUser(req, res);
}

// get all parent target of personal kpi
exports.getParentTarget = (req, res) => {
    return KPIPersonalService.getParentTarget(req, res);
}

// create new target of personal kpi
exports.create = (req, res) => {
    return KPIPersonalService.create(req, res);
}

// edit old target of personal kpi
exports.edit = (req, res) => {
    return KPIPersonalService.editById(req, res);
}

// request approve personal kpi
exports.confirmKPIPersonal = (req, res) => {
    return KPIPersonalService.confirmByUserId(req, res);
}

// approve all target of personal kpi
exports.approveKPIPersonal = (req, res) => {
    return KPIPersonalService.approveByUserId(req, res);
}

// request edit target of personal kpi
exports.requestEditKPIPersonal = (req, res) => {
    return KPIPersonalService.requestEditByUserId(req, res);
}

// delete target of personal kpi
exports.delete = (req, res) => {
    return KPIPersonalService.delete(req, res);
}