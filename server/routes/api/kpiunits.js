const express = require("express");
const router = express.Router();
const KPIUnitController = require("../../controllers/KPIUnitController");

// get all kpi unit
router.get('/', KPIUnitController.get);

// get target kpi unit by id
router.get('/:id', KPIUnitController.getById);

// get all target kpi of a unit
router.get('/unit/:id', KPIUnitController.getByUnit);

// get all parent target kpi of a unit
router.get('/parent/:id', KPIUnitController.getParentByUnit);

// add a new target of unit
router.post('/create', KPIUnitController.create);

// edit target of unit by id
router.put('/:id', KPIUnitController.edit);

// edit target of unit by id
router.put('/unit/:id', KPIUnitController.confirmKPIUnit);

// delete target of unit
router.delete('/:id', KPIUnitController.delete);

module.exports = router;