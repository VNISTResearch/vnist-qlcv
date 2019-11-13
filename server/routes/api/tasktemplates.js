const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');
const {role} = require('../../middleware/role');

const TaskTemplateController = require("../../controllers/TaskTemplateController");

router.get('/', auth, TaskTemplateController.get);
router.get('/:id', auth, TaskTemplateController.getById);
router.get('/role/:id', TaskTemplateController.getByRole);
router.get('/user/:id/:number', TaskTemplateController.getByUser);
router.post('/create', TaskTemplateController.create);
router.delete('/:id', auth, role, TaskTemplateController.delete);
router.post('/test', auth, TaskTemplateController.test);

module.exports = router;
