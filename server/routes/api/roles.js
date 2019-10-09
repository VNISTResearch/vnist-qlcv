const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');

const RoleController = require("../../controllers/RoleController");

router.get('/', auth, RoleController.get);

module.exports = router;