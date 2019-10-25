const KPIUnit = require('../models/KPIUnit.model');
const Department = require('../models/Department.model');
const mongoose = require("mongoose");
const rootid = require("../config/rootid").rootIdKpiUnit;
// get all kpi unit
exports.get = async (req, res) => {
    try {
        var kpiunits = await KPIUnit.find();

        res.json({
            message: "Get all Unit KPI",
            content: kpiunits
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// get kpi by id
exports.getById = async (req, res) => {
    try {
        var kpiunit = await KPIUnit.findById(req.params.id);

        res.json({
            message: "Get unit kpi by Id",
            content: kpiunit
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// get kpi by id unit
exports.getByUnit = async (req, res) => {
    try {
        var kpiunits = await KPIUnit.find({unit: req.params.id, evaluate: false});

        res.json({
            message: "Get unit kpi by id unit",
            content: kpiunits
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// get all parent kpi comfirmed but not evaluated by id unit
exports.getParentByUnit = async (req, res) => {
    try {
        var parentDepartment = await Department.findById(req.params.id);
        var kpiunits = await KPIUnit.find({unit: parentDepartment.parents, confirm: true, evaluate: false});
        res.json({
            message: "Lấy tất cả các mục tiêu cha",
            content: kpiunits
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// create kpi
exports.create = async(req, res) => {
    try {
        var kpiunit = await KPIUnit.create({
            unit: req.body.unit,
            creater: req.body.creater,
            name: req.body.name,
            parent: mongoose.Types.ObjectId.isValid(req.body.parent)?req.body.parent:rootid,
            time: req.body.time,
            weight: req.body.weight,
            criteria: req.body.criteria,
            confirm: false,
            evaluate: false
        });

        res.json({
            message: "Create success unit kpi",
            kpiunit: kpiunit
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Update kpi
exports.editById = async (req,res) => {
    try {
        var objUpdate = {
            unit: req.body.unit,
            creater: req.body.creater,
            name: req.body.name,
            parent: mongoose.Types.ObjectId.isValid(req.body.parent)?req.body.parent:rootid,
            time: req.body.time,
            weight: req.body.weight,
            criteria: req.body.criteria,
            confirm: false,
            evaluate: false
        }
        var kpiunit = await KPIUnit.findByIdAndUpdate(req.params.id, {$set:objUpdate}, {new:true});
        res.json({
            message: "Update success unit kpi",
            kpiunit: kpiunit,
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Confirm KPI Unit
exports.confirmByUnitId = async (req, res) => {
    try {
        var kpiunit = await KPIUnit.updateMany({unit: req.params.id}, {$set:{confirm: true}});
        res.json({
            message: "Confirm success unit kpi",
            kpiunit
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Delete kpi
exports.delete = async (req,res) => {
    try {
        var kpiunit = await KPIUnit.findByIdAndDelete(req.params.id);
        res.json({
            message: "Delete success unit kpi",
            kpiunit: kpiunit,
        });
    } catch (error) {
        res.json({ message: error });
    }
}