const Link = require('../models/Link.model');
const Privilege = require('../models/Privilege.model');
const UserRole = require('../models/UserRole.model');

exports.get = (req, res) => {
    Link.find()
        .then(links => res.status(200).json(links))
        .catch(err => res.status(400).json({msg: err}));
    console.log("Get All Link");
}

exports.getById = async (req, res) => {
    try {
        var pri = await Privilege.findOne({
            resource: req.params.id,
            resource_type: 'Link'
        }).populate([
            { path: 'resource', model: Link },
            { path: 'role'}
        ]);
        if(pri){
            res.status(200).json({
                id: pri.resource._id,
                url: pri.resource.url,
                role: pri.role[0]
            });
        }else{
            var link = await Link.findById(req.params.id);
            res.status(200).json({
                id: link._id,
                url: link.url,
                role: null
            });
        }
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.getLinkByRole = async (req, res) => { //lay tat ca cac link ma role duoc truy cap
    try {
        var roleId = await Role.findById(req.params.id); //lấy id role hiện tại
        var roles = [roleId._id]; //thêm id role hiện tại vào 1 mảng
        roles = roles.concat(roleId.abstract); //thêm các role children vào mảng
        console.log("ARRAY: ", roles);
        var links = await Privilege.find({ 
            role: { $in: roles },
            resource_type: 'Link'
        }).populate({ path: 'resource', model: Link }); 
        
        res.status(200).json(links)
    } catch (error) {
        res.status(400).json({msg: error});
    }
    console.log("Get Link By Role");
}

exports.create = (req, res) => {
    Link.create({
        url: req.body.url,
        description: req.body.description
    }).then(url => res.status(200).json({
        tag: 'Success',
        url
    })).catch( err => res.status(400).json({
        tag: 'Error',
        msg: 'Cannot create url!'
    }))
}

exports.addRoleToLink = async (req, res) => {
    try {
        var pri = await Privilege.findOne({ resource: req.body.url});
        if(pri === null){
            var link = Privilege.create({
                resource: req.body.url,
                resource_type: 'Link',
                role: [req.body.role]
            });

            res.status(200).json(link);
        }else{
            var link = await Privilege.updateOne({
                resource: req.body.url,
                resource_type: 'Link'
            },{
                role: [req.body.role]
            });

            res.status(200).json(link);
        }
    } catch (err) {
        res.status(400).json({
            tag: 'Error',
            msg: 'Cannot create url!'
        });
    }
}