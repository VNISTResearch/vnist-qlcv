const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');
const {role} = require('../../middleware/role');

const TaskManagementController = require("../../controllers/TaskManagementController");

router.get('/', auth,  TaskManagementController.get);
router.get('/:id', auth, TaskManagementController.getById);
router.get('/role/:id/:role', auth, TaskManagementController.getByRole);
router.get('/user/:unit/:user/:number', auth, TaskManagementController.getByUser);
router.post('/create', auth, TaskManagementController.create);
router.delete('/:id', auth, TaskManagementController.delete);

module.exports = router;