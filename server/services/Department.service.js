const Department = require('../models/Department.model');
const Role = require('../models/Role.model');
const UserRole = require('../models/UserRole.model');
const Privilege = require('../models/Privilege.model');

exports.get = (req, res) => {
	Department.find()
		.then(departments => res.json(departments))
		.catch(err => res.status(400).json(err));
	console.log("Get Departments");
}

exports.getById = (req, res) => {
    Department.findById(req.params.id)
		.then(department => res.json(department))
		.catch(err => res.status(400).json(err));
	console.log("GetById Department");
}

exports.getRoleOfDepartment = (req, res) => {
    Department.findById(req.params.id).populate([
			{path:'role.dean'}, 
			{path:'role.vice_dean'}, 
			{path:'role.employee'}])
		.then(department => res.json(department))
		.catch(err => res.status(400).json(err));
	console.log("Get Role Of Department");
}

exports.create = async (req, res) => {
    try {
		var employee = await Role.create({ //create employee
			name: "Employee of " + req.body.name
		});
		var vice_dean = await Role.create({ //create vice dean
			name: "ViceDean of " + req.body.name,
			childrens: [employee]
		});
		var dean = await Role.create({//create dean
			name: "Dean of " + req.body.name,
			childrens: [employee, vice_dean]
		});

		var department = await Department.create({ 
			name: req.body.name,
			role: {
				dean: dean,
				vice_dean: vice_dean,
				employee: employee
			}
		}); //create department

		res.json( {
			message: "Create Department Successfully!",
			content: department
		});
    } catch (error) {

        res.status(400).json( {message: error});
	}
	console.log("Create Department");
}

exports.createRole = async (req, res) => { //tạo các role cho departments
	Department.updateOne(
		{ _id: req.params.id },
		{ 
			deans: req.body.deans,
			vice_deans: req.body.vice_deans,
			employees: req.body.employees
		})
		.then(roles => res.json(roles))
		.catch(err => res.json(err))
	console.log("Create Role In Department");
}

exports.delete = async (req, res) => {
	try {
		var department = await Department.findById(req.params.id);
		var roles = [department.role.dean, department.role.vice_dean, department.role.employee];
		roles.map( async(role) => {
			await Role.deleteMany({ _id: role });
			await Privilege.deleteMany({ role: role });
		});
		department.delete();

		res.json("Delete Department Successfully!");
	} catch (error) {
		
        res.status(400).json( {message: error});
	}
	console.log("Delete Department");
}

exports.testInput = (req, res) => {
	res.json(req.body.input);
	if(req.body.input === ''){
		console.log("TestInput", req.body.input);
	}else{
		console.log("TestInput Length: ", req.body.input);
	}
}