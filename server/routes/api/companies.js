const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');

const CompanyController = require("../../controllers/CompanyController");

router.get('/', auth, CompanyController.get);
router.post('/', auth, CompanyController.create);

module.exports = router;