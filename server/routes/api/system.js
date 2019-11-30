const express = require("express");
const router = express.Router();
const SystemController = require('../../controllers/System/SystemController');

router.get('/log', SystemController.toggleLogger); 

module.exports = router;