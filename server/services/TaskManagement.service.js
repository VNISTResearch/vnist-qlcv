const mongoose = require("mongoose");
const Task = require('../models/Task.model');
const Role = require('../models/Role.model');
const ActionTask = require('../models/ActionTask.model');
const Department = require('../models/Department.model');

//Lấy tất cả các công việc
exports.get = (req, res) => {
    Task.find()
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(400).json({ msg: err }));
    console.log("Get All Task");
}

//Lấy mẫu công việc theo Id
exports.getById = (req, res) => {
    Task.findById(req.params.id)
        .then(task => res.status(200).json(task))
        .catch(err => res.status(400).json(err));
    console.log("Get Task By Id");
}

//Lấy mẫu công việc theo chức danh và người dùng
exports.getByRole = async (req, res) => {
    try {
        var tasks = await Task.find({
            role: req.params.role,
            creator: req.params.id
        }).populate({ path: 'tasktemplate', model: TaskTemplate });
        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

//Lấy mẫu công việc theo id người dùng
exports.getByUser = async (req, res) => {
    try {
        var taskCreators, taskResponsibles, taskAccounatables, taskConsulteds, taskInformeds;
        if (req.params.unit === "[]") {
            taskCreators = await Task.find({creator: req.params.user}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
            taskResponsibles = await Task.find({responsible: {$in: [req.params.user]}}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
            taskAccounatables = await Task.find({accounatable: {$in: [req.params.user]}}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
            taskConsulteds = await Task.find({consulted: {$in: [req.params.user]}}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
            taskInformeds = await Task.find({informed: {$in: [req.params.user]}}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        } else {
            taskCreators = await Task.find({creator: req.params.user, unit: { $in: req.params.unit.split(",") }}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
            taskResponsibles = await Task.find({responsible: {$in: [req.params.user]}, unit: { $in: req.params.unit.split(",") }}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
            taskAccounatables = await Task.find({accounatable: {$in: [req.params.user]}, unit: { $in: req.params.unit.split(",") }}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
            taskConsulteds = await Task.find({consulted: {$in: [req.params.user]}, unit: { $in: req.params.unit.split(",") }}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
            taskInformeds = await Task.find({informed: {$in: [req.params.user]}, unit: { $in: req.params.unit.split(",") }}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        }
        res.status(200).json({
            taskCreators: taskCreators,
            taskResponsibles: taskResponsibles,
            taskAccounatables: taskAccounatables,
            taskConsulteds: taskConsulteds,
            taskInformeds: taskInformeds
        })
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

//Tạo công việc mới
exports.create = async (req, res) => {

    try {
        // console.log(req.body);
        // Lấy thông tin công việc cha
        var level = 1;
        if (mongoose.Types.ObjectId.isValid(req.body.parent)) {
            var parent = await Task.findById(req.body.parent);
            if (parent) level = parent.level + 1;
        }
        // console.log(parent);
        // convert thời gian từ string sang date
        var starttime = req.body.startdate.split("-");
        var startdate = new Date(starttime[2], starttime[1], starttime[0]);
        var endtime = req.body.enddate.split("-");
        var enddate = new Date(endtime[2], endtime[1], endtime[0]);
        var task = await Task.create({ //Tạo dữ liệu mẫu công việc
            unit: req.body.unit,
            creator: req.body.creator, //id của người tạo
            name: req.body.name,
            description: req.body.description,
            startdate: startdate,
            enddate: enddate,
            priority: req.body.priority,
            tasktemplate: req.body.tasktemplate,
            role: req.body.role,
            parent: req.body.parent,
            level: level,
            kpi: req.body.kpi,
            responsible: req.body.responsible,
            accounatable: req.body.accounatable,
            consulted: req.body.consulted,
            informed: req.body.informed,
        });

        res.status(200).json({
            message: "Create Task Template Successfully!",
            data: task
        });
    } catch (error) {

        res.status(400).json(error);
    }
    console.log("Create Task Template");
}

// Sửa thông tin công việc







//Xóa công việc
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