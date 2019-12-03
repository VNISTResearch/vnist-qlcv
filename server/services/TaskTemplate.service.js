const TaskTemplate = require('../models/TaskTemplate.model');
const Privilege = require('../models/Privilege.model');
const Role = require('../models/Role.model');
const UserRole = require('../models/UserRole.model');
const Action = require('../models/Action.model');
const ActionTask = require('../models/ActionTask.model');
const InformationTaskTemplate = require('../models/InformationTaskTemplate.model');

//Lấy tất cả các mẫu công việc
exports.get = (req, res) => {
    TaskTemplate.find()
        .then(templates => res.status(200).json(templates))
        .catch(err => res.status(400).json({ msg: err }));
    console.log("Get Task Template");
}

//Lấy mẫu công việc theo Id
exports.getById = (req, res) => {
    TaskTemplate.findById(req.params.id)
        .then(template => res.status(200).json(template))
        .catch(err => res.status(400).json(err));
    console.log("Get Task Template By Id");
}

//Lấy mẫu công việc theo chức danh
exports.getByRole = async (req, res) => {
    try {
        var roleId = await Role.findById(req.params.id); //lấy id role hiện tại
        var roles = [roleId._id]; //thêm id role hiện tại vào 1 mảng
        roles = roles.concat(roleId.abstract); //thêm các role children vào mảng
        var tasks = await Privilege.find({
            role: { $in: roles },
            resource_type: 'TaskTemplate'
        }).populate({ path: 'resource', model: TaskTemplate, populate: { path: 'creator' } });

        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

// lấy tất cả mẫu công việc theo id user
exports.getByUser = async (req, res) => {
    try {
        console.log(req.params.unit);
        // Lấy tất cả các role người dùng có
        var roles = await UserRole.find({ id_user: req.params.id }).populate({path: "id_role"});
        var newRoles = roles.map(role => role.id_role);
        // lấy tất cả các role con của role người dùng có
        var allRole = [];
        newRoles.map(item => {
            allRole = allRole.concat(item._id); //thêm id role hiện tại vào 1 mảng
            allRole = allRole.concat(item.abstract); //thêm các role children vào mảng
        })
        var tasktemplates;
        if(req.params.unit === "[]"){
            tasktemplates = await Privilege.find({
                role: { $in: allRole },
                resource_type: 'TaskTemplate'
            }).sort({'createdAt': 'desc'}).skip(2*(req.params.number-1)).limit(2).populate({ path: 'resource', model: TaskTemplate, populate: { path: 'creator unit' } });
        } else {
            tasktemplates = await Privilege.find({
                role: { $in: allRole },
                resource_type: 'TaskTemplate'})
                .sort({'createdAt': 'desc'})
                .skip(2*(req.params.number-1))
                .limit(2)
                .populate({ 
                    path: 'resource', 
                    model: TaskTemplate, 
                    match: { unit: { $in: req.params.unit.split(",") }},
                    populate: { path: 'creator unit' } });
        }
        

        var totalCount = await Privilege.count({
            role: { $in: allRole },
            resource_type: 'TaskTemplate'
        });
        var totalPages = Math.ceil(totalCount / 2);
        res.status(200).json({"message" : tasktemplates,"pages": totalPages})
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

//Tạo mẫu công việc
exports.create = async (req, res) => {
    console.log(req.body);
    try {
        // console.log(req.body);
        var tasktemplate = await TaskTemplate.create({ //Tạo dữ liệu mẫu công việc
            unit: req.body.unit,
            name: req.body.name,
            creator: req.body.creator, //id của người tạo
            responsible: req.body.responsible,
            accounatable: req.body.accounatable,
            consulted: req.body.consulted,
            informed: req.body.informed,
            description: req.body.description,
            formula: req.body.formula
        });
        var reader = req.body.read; //role có quyền đọc
        var read = await Action.findOne({ name: "READ" }); //lấy quyền đọc
        var privilege = await Privilege.create({
            role: [reader], //id của người đọc cấp quyền đọc
            resource: tasktemplate._id,
            resource_type: "TaskTemplate",
            action: read //quyền READ
        });
        var actions = req.body.listAction.map(item => {
            ActionTask.create({
                tasktemplate: tasktemplate._id,
                name: item.name,
                description: item.description,
                mandatary: item.mandatary,
                type: "TaskTemplate"
            })
        });
        var informations = req.body.listInfo.map((item, key) => {
            InformationTaskTemplate.create({
                tasktemplate: tasktemplate._id,
                code: "p"+key,
                name: item.name,
                description: item.description,
                mandatary: item.mandatary,
                type: item.type
            })
        });
        console.log(privilege);
        var newTask = await Privilege.findById(privilege._id).populate({ path: 'resource', model: TaskTemplate, populate: { path: 'creator' } });

        res.status(200).json({
            message: "Create Task Template Successfully!",
            data: newTask
        });
    } catch (error) {

        res.status(400).json(error);
    }
    console.log("Create Task Template");
}

//Xóa mẫu công việc
exports.delete = async () => {
    try {
        var template = await WorkTemplate.findByIdAndDelete(req.params.id); // xóa mẫu công việc theo id
        var privileges = await Privilege.deleteMany({
            resource: req.params.id, //id của task template
            resourceType: "TaskTemplate"
        });

        res.status(200).json("Delete success");
    } catch (error) {
        res.status(400).json(error);
    }
    console.log("Delete Task Template")
}