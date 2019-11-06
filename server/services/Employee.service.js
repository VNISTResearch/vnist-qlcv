const Employee = require('../models/Employee.model');
const EmployeeContact = require('../models/EmployeeContact.model');

// get all list employee
exports.get = async (req, res) => {
    try {
        var allEmployees = await Employee.find();

        res.json({
            message: "Lấy danh sách nhân viên của tất cả các phòng ban thành công",
            content: allEmployees
        });
    } catch (error) {

        res.json({
            message: error
        });
    }
}

// add a new employee
exports.getByDepartment = async (req, res) => {
    try {
        var employee = await Employee.find(req.params.department);

        res.json({
            message: "Lấy danh sách nhân viên theo từng phòng ban thành công",
            content: employee,
        });
    } catch (error) {
        res.json({
            message: error
        });
    }
}

exports.create = async (req, res) => {
    try {
        //var brithday = req.body.time.split("-");
        //var date = new Date(time[1], time[0], 0);
        var employees = await Employee.create({
            fullName: req.body.fullName,
            employeeNumber: req.body.employeeNumber,
            MSCC: req.body.MSCC,
            gender: req.body.gender,
            brithday: req.body.brithday,
            birthplace: req.body.birthplace,
            CMND: req.body.CMND,
            dateCMND: req.body.dateCMND,
            addressCMND: req.body.addressCMND,
            phoneNumber: req.body.phoneNumber,
            emailCompany: req.body.emailCompany,
            MST: req.body.MST,
            ATM: req.body.ATM,
            nameBank: req.body.nameBank,
            numberBHYT: req.body.numberBHYT,
            national: req.body.national,
            religion: req.body.religion,
            relationship: req.body.relationship,
            cultural: req.body.cultural,
            foreignLanguage: req.body.foreignLanguage,
            educational: req.body.educational,
            certificate: null,
            experience: null,
            department: " ",
        });
        res.json({
            message: "Thêm mới thành công thông tin nhân viên",
            content: employees
        });
    } catch (error) {
        res.json({
            message: error
        });

    }
}