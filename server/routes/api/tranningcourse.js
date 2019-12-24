const express = require("express");
const router = express.Router();

const TranningCourseController = require("../../controllers/TranningCourseController");

// get all list educationProgram
router.get('/', TranningCourseController.getEducation);

// create a new a educationProgram
router.post('/createEducation', TranningCourseController.createEducation);

// delete a educationProgram
router.delete('/:numberEducation', TranningCourseController.deleteEducation);

// update a educationProgram
router.put('/:numberEducation', TranningCourseController.updateEducation);


module.exports = router;