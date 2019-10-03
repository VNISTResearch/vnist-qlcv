const express = require("express");
const router = express.Router();

const WorkTemplateController = require("../../controllers/WorkTemplateController");

router.get('/', WorkTemplateController.get);
router.get('/:jobTitleId', WorkTemplateController.getByJobTitle);
router.post('/create', WorkTemplateController.create);

module.exports = router;
