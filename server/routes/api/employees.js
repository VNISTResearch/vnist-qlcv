const express = require("express");
const router = express.Router();

const EmployeeController = require("../../controllers/EmployeeController");

// get all list employee
router.get('/', EmployeeController.get);

// get imformation employee by employeeNumber
router.get('/:id', EmployeeController.getByEmployeeNumber);

// create a new employee
router.post('/create', EmployeeController.create);

// update information employee
router.put('/:id',EmployeeController.updateInformationEmployee);

module.exports = router;