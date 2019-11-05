const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');
const {role} = require('../../middleware/role');

const TaskManagementController = require("../../controllers/TaskManagementController");

router.get('/', TaskManagementController.get);
router.get('/:id', TaskManagementController.getById);
router.get('/role/:id/:role', TaskManagementController.getByRole);
router.post('/create', TaskManagementController.create);
router.delete('/:id', TaskManagementController.delete);

module.exports = router;