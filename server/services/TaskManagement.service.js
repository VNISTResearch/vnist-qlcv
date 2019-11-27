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
        .populate({path: "unit creator responsible accounatable consulted informed parent"})
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

//Lấy công việc thực hiện chính theo id người dùng
exports.getTaskResponsibleByUser = async (req, res) => {
    try {
        var taskResponsibles;
        var perPage = Number(req.params.perpage);
        var page =  Number(req.params.number);
        if (req.params.unit === "[]" && req.params.status === "[]") {
            taskResponsibles = await Task.find({responsible: {$in: [req.params.user]}}).sort({'createdAt': 'asc'})
            .skip(perPage*(page-1)).limit(perPage).populate({path: "unit creator responsible accounatable consulted informed parent"});
        } else {
            taskResponsibles = await Task.find({
                responsible: {$in: [req.params.user]}, 
                $or: [
                    {unit: {$in: req.params.unit.split(",")}},
                    {status: {$in: req.params.status.split(",")}}
                ]
            }).sort({'createdAt': 'asc'})
            .skip(perPage*(page-1)).limit(perPage).populate({path: "unit creator responsible accounatable consulted informed parent"});
        }
        var totalCount = await Task.count({responsible: {$in: [req.params.user]}});
        var totalPages = Math.ceil(totalCount / perPage);
        res.status(200).json({
            "tasks": taskResponsibles,
            "totalpage": totalPages
        })
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

//Lấy công việc phê duyệt theo id người dùng
exports.getTaskAccounatableByUser = async (req, res) => {
    try {
        var taskAccounatables;
        if (req.params.unit === "[]") {
            taskAccounatables = await Task.find({accounatable: {$in: [req.params.user]}}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        } else {
            taskAccounatables = await Task.find({accounatable: {$in: [req.params.user]}, unit: { $in: req.params.unit.split(",") }}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        }
        res.status(200).json({
            taskAccounatables: taskAccounatables,
        })
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

//Lấy công việc hỗ trợ theo id người dùng
exports.getTaskConsultedByUser = async (req, res) => {
    try {
        var taskConsulteds;
        if (req.params.unit === "[]") {
            taskConsulteds = await Task.find({consulted: {$in: [req.params.user]}}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        } else {
            taskConsulteds = await Task.find({consulted: {$in: [req.params.user]}, unit: { $in: req.params.unit.split(",") }}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        }
        res.status(200).json({
            taskConsulteds: taskConsulteds,
        })
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

//Lấy công việc thiết lập theo id người dùng
exports.getTaskCreatorByUser = async (req, res) => {
    try {
        var taskCreators;
        if (req.params.unit === "[]") {
            taskCreators = await Task.find({creator: req.params.user}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        } else {
            taskCreators = await Task.find({creator: req.params.user, unit: { $in: req.params.unit.split(",") }}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        }
        res.status(200).json({
            taskCreators: taskCreators,
        })
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

//Lấy công việc quan sát theo id người dùng
exports.getTaskInformedByUser = async (req, res) => {
    try {
        var taskInformeds;
        if (req.params.unit === "[]") {
            taskInformeds = await Task.find({informed: {$in: [req.params.user]}}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        } else {
            taskInformeds = await Task.find({informed: {$in: [req.params.user]}, unit: { $in: req.params.unit.split(",") }}).sort({'createdAt': 'asc'})
            .skip(10*(req.params.number-1)).limit(10).populate({ path: 'unit', model: Department});
        }
        res.status(200).json({
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