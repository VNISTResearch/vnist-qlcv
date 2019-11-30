const express = require("express");
const router = express.Router();

const CompanyController = require('../../controllers/CompanyController');

router.get('/', CompanyController.get);
router.post('/', CompanyController.create);
router.patch('/:id', CompanyController.edit);

module.exports = router;