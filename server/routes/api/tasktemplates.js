const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');

const TaskTemplateController = require("../../controllers/TaskTemplateController");

router.get('/', auth, TaskTemplateController.get);
router.get('/:id', auth, TaskTemplateController.getById);
router.get('/role/:id', auth, TaskTemplateController.getByRole);
router.post('/create', auth, TaskTemplateController.create);
router.delete('/:id', auth, TaskTemplateController.delete);

module.exports = router;
