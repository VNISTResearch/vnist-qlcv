const TaskTemplate = require('../models/TaskTemplate.model');
const Privilege = require('../models/Privilege.model');
const Role = require('../models/Role.model');
const Action = require('../models/Action.model')

//Lấy tất cả các mẫu công việc
exports.get = (req, res) => {
    TaskTemplate.find()
        .then(templates => res.json(templates))
        .catch(err => res.status(400).json(err));
    console.log("Get Task Template");
}

//Lấy mẫu công việc theo Id
exports.getById = (req, res) => {
    TaskTemplate.findById(req.params.id)
        .then(template => res.json(template))
        .catch(err => res.status(400).json(err));
    console.log("Get Task Template By Id");
}

//Lấy mẫu công việc theo chức danh
exports.getByRole = (req, res) => {	
    Privilege.find({ role: req.params.id })
        .populate({ path: 'resource', model: WorkTemplate })
        .then(tasktemplates => res.json(tasktemplates))
        .catch(err => res.status(400).json(err));
    console.log("Get Task Template By Role");
}

//Tạo mẫu công việc
exports.create = async(req, res) => {

    try {
        var tasktemplate = await TaskTemplate.create({  //Tạo dữ liệu mẫu công việc
            name: req.body.name,
            creator: req.body.creator, //id của người tạo
            description: req.body.description
        });
		var readers = req.body.read; //mảng những role có quyền đọc
		var read = await Action.findOne({name: "READ"}); //lấy quyền đọc
        readers.map( async reader => {
            await Privilege.create({    
                role: reader,   //id của người đọc cấp quyền đọc               
                resource: tasktemplate,                
                resourceType: "TaskTemplate",           
                action: read //quyền READ            
            });
		});

        res.json({
            message: "Create Task Template Successfully!",
            tasktemplate: tasktemplate,
            creator: creator,
			readers: readers
        });
    } catch (error) {

        res.json({ message: error });
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

        res.json({
            message: "Xóa thành công mẫu công việc",
            template: template,
            privileges: privileges
        });
    } catch (error) {
        res.json({ message: error });
    }
    console.log("Delete Task Template")
}
