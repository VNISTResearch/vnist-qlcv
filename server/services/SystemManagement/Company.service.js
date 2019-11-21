const Company = require('../../models/Company.model');
const Role = require('../../models/Role.model');

exports.get = (req, res) => {
    Company.find()
        .then(coms => res.status(200).json(coms))
        .catch(err => res.status(400).json({msg: err}));
    console.log("Get All Company");
}

exports.create = async (req, res) => {
    try {
        var com = await Company.create({
            name: req.body.name,
            description: req.body.description
        });
        console.log(com);
        var superRole = await Role.findOne({
            name: "Super Admin"
        });
        console.log(superRole);
        var role = await Role.create({
            name: "Super Admin",
            company: com._id,
            abstract: [superRole._id]
        });
        
        console.log(role);
        res.status(200).json({
            msg: "Create company successfully",
            company: com,
            superadmin: role
        });

    } catch (error) {
        res.status(400).json({ msg: error});
    }
    
}