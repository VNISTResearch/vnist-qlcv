const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');

const DepartmentController = require("../../controllers/DepartmentController");

router.get('/', DepartmentController.get);
// router.post('/create', DepartmentController.create);
router.post('/', auth, DepartmentController.createDepartment);
router.post('/add/:id', auth, DepartmentController.addRoleForUser);
router.post('/add-user/:id', auth, DepartmentController.addUserWithRole);
router.get('/:id', auth, DepartmentController.getById);
router.get('/role/:id', auth, DepartmentController.getRoleOfDepartment);
router.get('/info/:id', auth, DepartmentController.getDepartmentInfo);
router.delete('/:id', auth, DepartmentController.delete);
router.post('/create', DepartmentController.create);
router.get('/department-of-user/:id', DepartmentController.getDepartmentOfUser);

module.exports = router;