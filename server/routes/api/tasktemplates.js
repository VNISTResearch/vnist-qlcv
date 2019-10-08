const express = require("express");
const router = express.Router();

const TaskTemplateController = require("../../controllers/TaskTemplateController");

router.get('/', TaskTemplateController.get);
router.get('/:id', TaskTemplateController.getById);
router.get('/role/:id', TaskTemplateController.getByRole);
router.post('/create', TaskTemplateController.create);
router.delete('/:id', TaskTemplateController.delete);

module.exports = router;
