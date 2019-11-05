const Role = require('../models/Role.model');
const UserRole = require('../models/UserRole.model');
const User = require('../models/User.model');
const Department = require('../models/Department.model');

exports.get = async (req, res) => {
    try {
        var roles = await Role.find();

        res.status(200).json(roles);
    } catch (error) {

        res.status(400).json({msg: error});
    }
    console.log("get roles");
}

exports.getRoleById = async (req, res) => {
    try {
        var role = await Role.findById(req.params.id).populate('id_role');

        res.status(200).json(role);
    } catch (error) {
        res.status(400).json({msg: error});
    }
}

exports.getSuperRole = async (req, res) => {
    try {
        var roles = await Role.find({
            name: { $in: ["Admin", "Dean", "Vice_Dean", "Employee"]}
        });

        res.status(200).json(roles);
    } catch (error) {

        res.status(400).json({msg: error});
    }
    console.log("get super roles");
}

exports.getRoleOfUser = async (req, res) => {
    try {
        var roles = await UserRole.find({id_user: req.params.id}).populate('id_role');

        res.status(200).json(roles);
    } catch (error) {

        res.status(400).json({msg: error});
    }
}

exports.getRoleSameDepartment = async (req, res) => {
    var id = req.params.id;
    try {
        var roles = await Department.findOne({ 
            $or:[
                {'dean':id}, 
                {'vice_dean':id}, 
                {'employee':id}
            ]  
        }).populate([
			{path:'dean'}, 
			{path:'vice_dean'}, 
            {path:'employee'}]
        );
        console.log(roles);
        res.status(200).json(roles);
    } catch (error) {

        res.status(400).json({msg: error});
    }
    console.log("get roles same");
}

exports.getAdmins = async (req, res) => {
    try {
        var admin = await Role.findOne({name: 'Admin'});
        var admins = await UserRole.findOne({id_role: admin._id}).populate('id_user');
        res.status(200).json({
            tag: 'Success',
            admins
        })
    } catch (error) {
        res.status(400).json({
            tag: 'Error',
            msg: error
        })
    }
}

exports.addAdmin = async (req, res) => {
    try {
        var user = await User.findOne({email: req.body.email});
        console.log(user);
        if(user){
            var admin = await Role.findOne({name: 'Admin'});
            await UserRole.updateOne(
                { id_role: admin._id }, 
                { $push: { id_user: user._id } }
            );
    
            res.status(200).json({
                tag: 'Success',
                user: user
            })
        }else{
            res.status(400).json({
                tag: 'Error',
                msg: 'Not found email in system'
            })
        }
    } catch (error) {
        res.status(400).json({
            tag: 'Error',
            msg: error
        })
    }
}