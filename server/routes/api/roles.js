const express = require("express");
const router = express.Router();

const RoleController = require("../../controllers/RoleController");

router.get('/', RoleController.get);

module.exports = router;