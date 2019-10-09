const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');

const DepartmentController = require("../../controllers/DepartmentController");

router.get('/', auth, DepartmentController.get);
router.post('/', auth, DepartmentController.create);
router.post('/role/:id', auth, DepartmentController.createRole);
router.get('/:id', auth, DepartmentController.getById);
router.get('/role/:id', auth, DepartmentController.getRoleOfDepartment);
router.delete('/:id', auth, DepartmentController.delete);
router.post('/test', auth, DepartmentController.testInput);

module.exports = router;