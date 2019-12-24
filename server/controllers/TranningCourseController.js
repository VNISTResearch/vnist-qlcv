const TranningCourseService = require('../services/TranningCourse');

// get all list educationProgram

exports.getEducation = (req, res) => {
    return TranningCourseService.getEducation(req, res);
}

// create a new educationProgram
exports.createEducation = (req, res) => {
    return TranningCourseService.createEducationProgram(req, res);
}

// delete a educationProgram
exports.deleteEducation = (req, res) => {
    return TranningCourseService.deleteEducation(req, res);
}

// update a educationProgram
exports.updateEducation = (req, res) =>{
    return TranningCourseService.updateEducation(req, res);
}