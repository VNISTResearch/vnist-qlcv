const KPIUnitService = require('../services/KPIUnit.service');

exports.get = (req, res) => {
    return KPIUnitService.get(req, res);
};

exports.getById = (req, res) => {
    return KPIUnitService.getById(req, res);
}

exports.getByUnit = (req, res) => {
    return KPIUnitService.getByUnit(req, res);
}

exports.getParentByUnit = (req, res) => {
    return KPIUnitService.getParentByUnit(req, res);
}

exports.create = (req, res) => {
    return KPIUnitService.create(req, res);
}

exports.edit = (req, res) => {
    return KPIUnitService.editById(req, res);
}

exports.confirmKPIUnit = (req, res) => {
    return KPIUnitService.confirmByUnitId(req, res);
}

exports.delete = (req, res) => {
    return KPIUnitService.delete(req, res);
}