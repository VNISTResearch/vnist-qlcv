const express = require("express");
const router = express.Router();

const JobTitleController = require("../../controllers/JobTitleController");

router.get('/', JobTitleController.get);

module.exports = router;