const Course = require('../models/Course.model');
const EducationProgram = require('../models/EducationProgram.model');
const ListEmployeeCourse = require('../models/ListEmployeeCourse.model');

//get list educationProgram
exports.getEducation = async (req, res) => {
    try {
        var allEducationProgram = await EducationProgram.find();

        res.json({
            message: "Lấy danh sách tất cả các chương trình đào tạo thành công",
            content: {
                ...allEducationProgram
            }
        });
    } catch (error) {
        res.json({
            message: error
        });
    }
}

// add a new educationProgram
exports.createEducationProgram = async (req, res) => {
    try {
        var education = await EducationProgram.create({
            nameEducation: req.body.nameEducation,
            numberEducation: req.body.numberEducation,
            unitEducation: req.body.unitEducation,
            positionEducation: req.body.positionEducation,
        });

        res.json({
            message: "Thêm mới chương trình đào tạo thành công",
            content: education
        });
    } catch (error) {
        res.json({
            message: error
        });
    }
}

// Delete educationProgram
exports.deleteEducation = async (req, res) => {
    try {
        var educationDelete = await EducationProgram.findOneAndDelete({
            numberEducation: req.params.numberEducation
        });
        res.json({
            message: "Xoá thành công một chương trình đào tạo",
            educationProgramDelete: educationDelete
        });
    } catch (error) {
        res.json({
            message: error
        });

    }
}
// Update educationProgram
exports.updateEducation = async (req, res) => {
    try {
        var eduacationChange = {
            numberEducation: req.body.numberEducation,
            nameEducation: req.body.nameEducation,
            unitEducation: req.body.unitEducation,
            positionEducation: req.body.positionEducation
        };
        var educationUpdate = await EducationProgram.findOneAndUpdate({
            numberEducation: req.params.numberEducation
        }, {
            $set: eduacationChange
        });
        res.json({
            message: "Update thành công chương trinh đào tạo",
            educationProgramUpdate: educationUpdate
        });
    } catch (error) {
        res.json({
            message: error
        });
    }
}