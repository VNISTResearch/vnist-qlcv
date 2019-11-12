const Department = require('../models/Department.model');
const Role = require('../models/Role.model');
const UserRole = require('../models/UserRole.model');
const User = require('../models/User.model');
const Privilege = require('../models/Privilege.model');
const JobTitle = require('../models/JobTitle.model');
const mongoose = require("mongoose");
const rootid = require("../config/rootid").rootIdDepartment;

exports.get = (req, res) => {
	Department.find()
		.then(departments => {
			res.status(200).json(departments);
		})
		.catch(err => {
			res.status(400).json({
				tag: "Error",
				message: err
			})
		});
	console.log("Get Departments");
}

exports.getById = (req, res) => {
    Department.findById(req.params.id)
		.then(departments => {
			res.status(200).json(departments);
		})
		.catch(err => {
			res.status(400).json(err)
		});
	console.log("GetById Department");
}

exports.getRoleOfDepartment = (req, res) => {
    Department.findById(req.params.id).populate([
			{path:'dean'}, 
			{path:'vice_dean'}, 
			{path:'employee'}])
		.then(department => res.status(200).json(department))
		.catch(err => res.status(400).json(err));
	console.log("Get Role Of Department");
}

exports.getDepartmentInfo = async(req, res) => {
	try {
		var department = await Department
			.findById(req.params.id)
			.populate([
			{path:'dean'}, 
			{path:'vice_dean'}, 
			{path:'employee'}]);
		var deans = await UserRole.findOne({id_role: department.dean}).populate('id_user');
		var vice_deans = await UserRole.findOne({id_role: department.vice_dean}).populate('id_user');
		var employees = await UserRole.findOne({id_role: department.employee}).populate('id_user');

		res.status(200).json({
			msg: "Get info department success",
			name: department.name,
			dean: department.dean,
			vice_dean: department.vice_dean,
			employee: department.employee,
			deans: deans,
			vice_deans: vice_deans,
			employees: employees
		})
	} catch (error) {
		res.status(400).json({msg: error});
	}
}

exports.createDepartment = async (req, res) => {
    try {
		var superDean = await Role.findOne({name: 'Dean'});
		var superVicedean = await Role.findOne({name: 'Vice_Dean'});
		var superEmployee = await Role.findOne({name: 'Employee'});
		var employee = await Role.create({ //create employee
			name: req.body.employee,
			abstract: [superEmployee]
		});
		var vice_dean = await Role.create({ //create vice dean
			name: req.body.vice_dean,
			abstract: [superVicedean, superEmployee, employee]
		});
		var dean = await Role.create({//create dean
			name: req.body.dean,
			abstract: [superDean, superVicedean, superEmployee, vice_dean, employee]
		});
		var department = await Department.create({ 
			name: req.body.name,
			description: req.body.description,
			dean: dean,
			vice_dean: vice_dean,
			employee: employee,
			parent: req.body.parent 
		}); 

		res.status(200).json({ 
			msg : "Create Department Successfully!",
			department: department
		 });
    } catch (error) {

        res.status(400).json({msg: "Can't create department! Try different name!"});
	}
	console.log("Create Department");
}

getRole = (department, nameRole) => {
    if(nameRole === "Employee"){
        console.log("Employee");
        return department.employee._id;
    }else if(nameRole === "Vice dean"){
        console.log("Vice dean");
        return department.vice_dean._id;
    }else{
        console.log("Dean");
        return department.dean._id;
    }
}

checkAndAddRole = async (department, nameRole, users) => {
    try {
        var id = await getRole(department, nameRole);
        var newUserRole = await UserRole.findOrCreate({ id_role: id},{
                id_user: users, //mảng users muốn gán role
                id_role: id //id của role đó
            });
        if(newUserRole.created === false){
            var update = await UserRole.updateOne({ id_role: id}, {id_user: users});
            return update;	
        }
        return newUserRole;
    } catch (error) {
        return error;
    }
}

exports.addUserWithRole = async (req, res) => { //thêm user vào trong department với role tùy chỉnh
	try {
		var department = await Department.findById(req.params.id); //lấy department
		await checkAndAddRole(department, "Dean", req.body.deans);
		await checkAndAddRole(department, "Vice dean", req.body.vice_deans);
		await checkAndAddRole(department, "Employee", req.body.employees);

		res.status(200).json("Add User Role Success");
		console.log("Create Role In Department");
	} catch (error) {
		res.status(400).json(error);
	}
}

exports.delete = async (req, res) => {
	try {
		var department = await Department.findById(req.params.id);
		var roles = [department.dean, department.vice_dean, department.employee];
		roles.map( async(role) => {
			await Role.deleteMany({ _id: role });
			await Privilege.deleteMany({ role: role });
			await UserRole.deleteMany({id_role: role});
		});
		department.delete();

		res.status(200).json({
			tag: "Success",
			message: "Delete Department Successfully!"
		});
	} catch (error) {
		
        res.status(400).json({
			tag: "Error",
			message: error
		});
	}
	console.log("Delete Department");
}

exports.addRoleForUser = async (req, res) => {
	try {
		const user = await User.findOne({email: req.body.email});
		var role = await UserRole.findOne({id_role: req.params.id});
		if(role === null){
			var role = await UserRole.create({
				id_user: [user._id],
				id_role: req.params.id
			})

			res.status(200).json({
				msg: "Add user success",
				user: user,
				role
			});
		}else{
			var check = await UserRole.findOne({
				id_user: user._id,
				id_role: req.params.id
			});
			if(check === null){
				await UserRole.updateOne(
					{ id_role: req.params.id }, 
					{ $push: { id_user: user._id } }
				);

				res.status(200).json({
					msg: "Add user success",
					user: user,
					role
				});
			}else{
				res.status(400).json({msg: "User added! Try different user"});
			}
		}
	} catch (error) {

		res.status(400).json({msg: error});
	}
}

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
        var department = await Department.create({ 
            name: req.body.name,
            parent: mongoose.Types.ObjectId.isValid(req.body.parent)?req.body.parent:rootid,
        }); //create department
        var roles = await Role.find().exec();//get all role of database
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

exports.getDepartmentOfUser = async (req, res) => {
	console.log('get department of user')
    try {
		var roles = await UserRole.find({id_user: req.params.id});
		// console.log(roles);
		var newRoles = roles.map( role => role.id_role);
		var departments = await Department.find({
			$or: [
				{'dean': { $in: newRoles }}, 
				{'vice_dean':{ $in: newRoles }}, 
				{'employee':{ $in: newRoles }}
			]  
		});
		console.log(departments);

        res.status(200).json(departments);
    } catch (error) {

        res.status(400).json({msg: error});
    }
}
