const express = require("express");
const router = express.Router();

const DepartmentController = require("../../controllers/DepartmentController");

router.get('/', DepartmentController.get);
router.post('/create', DepartmentController.create);

module.exports = router;