const Link = require('../../models/Link.model');
const Privilege = require('../../models/Privilege.model');
const UserRole = require('../../models/UserRole.model');

exports.get = (req, res) => {
    Link.find()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err));
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
                description: pri.resource.description,
                role: pri.role[0]
            });
        }else{
            var link = await Link.findById(req.params.id);
            res.status(200).json({
                id: link._id,
                url: link.url,
                description: link.description,
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
        // res.json(roleId);
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

exports.create = async (req, res) => {
    try {
        var link = await Link.create({
            url: req.body.url,
            description: req.body.description
        });
        await Privilege.create({
            resource: link._id,
            resource_type: 'Link',
            role: [req.body.role]
        });

        res.status(200).json({
            msg: "Create link success",
            link
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Cannot create url!'
        });
    }
}

exports.edit = async (req, res) => {
    try {
        var link = await Link.updateOne(

            { _id : req.params.id }, //id của link

            { //giá trị được update
                url: req.body.url,
                description: req.body.description
            }
        );
        await Privilege.updateOne(
            { 
                resource: req.params.id,
                resource_type: 'Link'
            },
            {
            role: [req.body.role]
            }
        );

        res.status(200).json({
            msg: "Edit success",
            link
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Cannot create url!'
        });
    }
}

exports.delete = async(req, res) => {
    try {
        await Privilege.deleteOne({
            resource: req.params.id,
            resource_type: 'Link'
        })
        await Link.deleteOne({
            _id: req.params.id
        })

        res.status(200).json({
            msg: 'Delete successfully'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Delete error'
        });
    }
}