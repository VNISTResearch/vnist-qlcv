const express = require("express");
const router = express.Router();

const CompanyController = require('../../controllers/CompanyController');

router.get('/', CompanyController.get);
router.post('/', CompanyController.create);

module.exports = router;