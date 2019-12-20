const express = require("express");
const router = express.Router();
const KPIUnitController = require("../../controllers/KPIUnitController");

// get all kpi unit
router.get('/unit/:id', KPIUnitController.get);

// get target kpi unit by id
router.get('/:id', KPIUnitController.getById);

// Lấy KPI đơn vị hiện tại qua vai trò
router.get('/current-unit/role/:id', KPIUnitController.getByRole);

// get all target kpi of a unit
router.get('/current-unit/:id', KPIUnitController.getByUnit);

// get all parent target kpi of a unit
router.get('/parent/:id', KPIUnitController.getParentByUnit);

// Khởi tạo KPI đơn vị
router.post('/create', KPIUnitController.create);

// add a new target of unit
router.post('/create-target', KPIUnitController.createTarget);

// edit kpi unit by id
router.put('/:id', KPIUnitController.edit);

// edit status of unit by id
router.put('/status/:id/:status', KPIUnitController.editStatusKPIUnit);

// Cập nhật dữ liệu mới nhất cho kpi đơn vị
router.put('/evaluate/:id', KPIUnitController.evaluateKPI);

// delete kpi unit
router.delete('/:id', KPIUnitController.delete);

// edit target of unit by id
router.put('/target/:id', KPIUnitController.editTargetById);

// delete target of unit
router.delete('/target/:kpiunit/:id', KPIUnitController.deleteTarget);

module.exports = router;