const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');

const ComponentController = require("../../controllers/ComponentController");

router.get('/', auth, ComponentController.get);
router.get('/role/:id', auth, ComponentController.getComponentByRole);

module.exports = router;