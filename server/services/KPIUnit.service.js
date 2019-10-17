const KPIUnit = require('../models/KPIUnit.model');
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
        var kpiunit = await KPIUnit.find({unit: req.params.id});

        res.json({
            message: "Get unit kpi by id unit",
            content: kpiunit
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
            name: req.body.name,
            parent: mongoose.Types.ObjectId.isValid(req.body.parent)?req.body.parent:rootid,
            time: req.body.time,
            weight: req.body.weight,
            criteria: req.body.criteria
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
            name: req.body.name,
            parent: mongoose.Types.ObjectId.isValid(req.body.parent)?req.body.parent:rootid,
            time: req.body.time,
            weight: req.body.weight,
            criteria: req.body.criteria
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