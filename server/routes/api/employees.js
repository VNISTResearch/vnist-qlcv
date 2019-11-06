const express = require("express");
const router = express.Router();

const EmployeeController = require("../../controllers/EmployeeController");

// get all list employee
router.get('/', EmployeeController.get);

// create a new employee
router.post('/create', EmployeeController.create);

module.exports = router;