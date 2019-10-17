const Department = require('../models/Department.model');
const Role = require('../models/Role.model');
const JobTitle = require('../models/JobTitle.model');

exports.getAll = async (req, res)=> {
    try {
        var departments = await Department.find();
        
        res.json(departments);
    } catch (error) {
        
        res.json( {message: error});
    }
}

exports.create = async (req, res) => {
    try {
        var department = await Department.create({ name: req.body.name}); //create department
        var roles = await Role.find().exec();    //get all role of database
        var jobTitles = [ //create jobtitles
            {
                name: roles[0].name + " " + department.name,
                role: roles[0]._id,
                department: department._id
            },
            {
                name: roles[1].name + " " + department.name,
                role: roles[1]._id,
                department: department._id
            },
            {
                name: roles[2].name + " " + department.name,
                role: roles[2]._id,
                department: department._id
            }
        ];
        var jobs = await JobTitle.insertMany(jobTitles); //add to database

        res.json( {
            message: "Tạo phòng ban thàng công!",
            department: department,
            jobTitles: jobs
        });
    } catch (error) {

        res.json( {message: error});
    }
}