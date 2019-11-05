const Component = require('../models/Component.model');
const Privilege = require('../models/Privilege.model');

exports.get = (req, res) => {
    Component.find()
        .then(components => res.status(200).json(components))
        .catch(err => res.status(400).json({msg: err}));
    console.log("Get All Component");
}

exports.getComponentByRole = async (req, res) => { //lay tat ca cac link ma role duoc truy cap
    try {
        var roleId = await Role.findById(req.params.id); //lấy id role hiện tại
        var roles = [roleId._id]; //thêm id role hiện tại vào 1 mảng
        roles = roles.concat(roleId.abstract); //thêm các role children vào mảng
        var components = await Privilege.find({ 
            role: { $in: roles },
            resource_type: 'Component'
        }).populate({ path: 'resource', model: Component }); 
        
        res.status(200).json(components)
    } catch (error) {
        res.status(400).json({msg: error});
    }
    console.log("Get components By Role");
}

exports.create = async (req, res) => {
    try {
        var component = await Component.create({
            name: req.body.name,
            description: req.body.description
        });
        await Privilege.create({
            resource: component._id,
            resource_type: 'Component',
            role: [req.body.role]
        });

        res.status(200).json({
            msg: "Create component success",
            component
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Cannot create component!'
        });
    }
}