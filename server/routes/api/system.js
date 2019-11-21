const express = require("express");
const router = express.Router();
const SystemController = require('../../controllers/System/SystemController');

router.post('/reset-system', SystemController.reset); 

module.exports = router;