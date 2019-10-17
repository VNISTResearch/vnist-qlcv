const express = require("express");
const router = express.Router();

const KPIUnitController = require("../../controllers/KPIUnitController");

router.get('/', KPIUnitController.get);
router.get('/:id', KPIUnitController.getById);
router.get('/unit/:id', KPIUnitController.getByUnit);
router.post('/create', KPIUnitController.create);
router.put('/:id', KPIUnitController.edit);
router.delete('/:id', KPIUnitController.delete);

module.exports = router;