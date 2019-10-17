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
        var template = await KPIUnit.findById(req.params.id);

        res.json({
            message: "Get unit kpi by Id",
            content: template
        });
    } catch (error) {

        res.json({ message: error });
    }
}
// get kpi by id unit
// exports.get = async (req, res) => {
//     try {
//         var kpiunits = await KPIUnit.find("unit": req.params.id);

//         res.json({
//             message: "Get unit kpi by id unit",
//             content: kpiunits
//         });
//     } catch (error) {

//         res.json({ message: error });
//     }
// }
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
// Delete kpi

// Edit kpi
