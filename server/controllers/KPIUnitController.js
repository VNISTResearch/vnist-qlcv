const KPIUnitService = require('../services/KPI/KPIUnit.service');

// get all target of unit kpi
exports.get = (req, res) => {
    return KPIUnitService.get(req, res);
};

// get target of unit kpi by id
exports.getById = (req, res) => {
    return KPIUnitService.getById(req, res);
}

// get all target of unit by unit id
exports.getByUnit = (req, res) => {
    return KPIUnitService.getByUnit(req, res);
}

// get all parent target of unit kpi
exports.getParentByUnit = (req, res) => {
    return KPIUnitService.getParentByUnit(req, res);
}

// create new target of unit kpi
exports.create = (req, res) => {
    return KPIUnitService.create(req, res);
}

// edit old target of unit kpi
exports.edit = (req, res) => {
    return KPIUnitService.editById(req, res);
}

// confirm all target of unit kpi
exports.confirmKPIUnit = (req, res) => {
    return KPIUnitService.confirmByUnitId(req, res);
}

// delete target of unit kpi
exports.delete = (req, res) => {
    return KPIUnitService.delete(req, res);
}