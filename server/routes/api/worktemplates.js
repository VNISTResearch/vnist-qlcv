const express = require("express");
const router = express.Router();

const WorkTemplateController = require("../../controllers/WorkTemplateController");

router.get('/', WorkTemplateController.get);
router.get('/:id', WorkTemplateController.getById);
router.get('/job_title/:id', WorkTemplateController.getByJobTitle);
router.post('/create', WorkTemplateController.create);
router.delete('/:id', WorkTemplateController.delete);

module.exports = router;
