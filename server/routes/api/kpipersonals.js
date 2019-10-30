const express = require("express");
const router = express.Router();
const KPIPersonalController = require("../../controllers/KPIPersonalController");

// get all kpi personal
router.get('/', KPIPersonalController.get);

// get target kpi personal by id
router.get('/:id', KPIPersonalController.getById);

// get all target kpi of a personal
router.get('/personal/:id', KPIPersonalController.getByUser);

// get all parent target kpi of a personal
router.get('/parent/:id', KPIPersonalController.getParentTarget);

// add a new target of personal
router.post('/create', KPIPersonalController.create);

// edit target of personal by id
router.put('/:id', KPIPersonalController.edit);

// confirm target of personal kpi
router.put('/confirm/:id', KPIPersonalController.confirmKPIPersonal);

// approve target of personal kpi
router.put('/approve/:id', KPIPersonalController.approveKPIPersonal);

// request edit target of personal kpi
router.put('/requestedit/:id', KPIPersonalController.requestEditKPIPersonal);

// delete target of personal
router.delete('/:id', KPIPersonalController.delete);

module.exports = router;