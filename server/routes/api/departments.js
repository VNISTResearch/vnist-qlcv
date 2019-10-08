const express = require("express");
const router = express.Router();

const DepartmentController = require("../../controllers/DepartmentController");

router.get('/', DepartmentController.get);
router.post('/', DepartmentController.create);
router.post('/role/:id', DepartmentController.createRole);
router.get('/:id', DepartmentController.getById);
router.get('/role/:id', DepartmentController.getRoleOfDepartment);
router.delete('/:id', DepartmentController.delete);
router.post('/test', DepartmentController.testInput);

module.exports = router;