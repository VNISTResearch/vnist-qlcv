const WorkTemplate = require('../models/WorkTemplate.model');
const Privilege = require('../models/Privilege.model');
const JobTitle = require('../models/JobTitle.model');
const Action = require('../models/Action.model')

//Lấy tất cả các mẫu công việc
exports.get = async (req, res) => {
    try {
        var template = await WorkTemplate.find();

        res.json({
            message: "Get all worktemplate",
            content: template
        });
    } catch (error) {

        res.json({ message: error });
    }
}

//Lấy mẫu công việc theo Id
exports.getById = async (req, res) => {
    try {
        var template = await WorkTemplate.findById(req.params.id);

        res.json({
            message: "Get worktemplate by Id",
            content: template
        });
    } catch (error) {

        res.json({ message: error });
    }
}

//Lấy mẫu công việc theo chức danh
exports.getByJobTitle = async (req, res) => { // lấy role và departments vì jobtitle = role + department    
    try {
        var id  = req.params.jobTitleId;
        var jobTitle = await JobTitle.findById(id);
        var f = {
            role: jobTitle.role, 
            department: jobTitle.department
        };
        var result = await Privilege.find(f).populate({ path: 'resource', model: WorkTemplate });

        res.json(result);
    } catch (error) {
        res.json({ message: error });
    }
}

//Tạo mẫu công việc
exports.create = async(req, res) => {
    try {
        var wt = await WorkTemplate.create({  //Tạo dữ liệu mẫu công việc
            name: req.body.name,
            creator: req.body.creator,
            description: req.body.description
        });
        
        var jobs = req.body.read;
        var read_action = await Action.findOne({name: "READ"}); 
        jobs.map( async job => {
            var r = await JobTitle.findById(job);
            await Privilege.create({    
                role: r.role,                  
                department: r.department,           
                resource: wt._id,                
                resourceType: "WorkTemplate",           
                action: read_action._id                        
            });
        });

        res.json({
            message: "Tạo thành công  mẫu công việc",
            worktemplate: jobs,
            read: jobs
        });
    } catch (error) {
        res.json({ message: error });
    }
}

//Xóa mẫu công việc
exports.delete = async () => {
    try {
        var template = await WorkTemplate.deleteOne(req.params.id); // xóa mẫu công việc theo id
        var privileges = await Privilege.delete({ 
            resource: id,
            resourceType: "WorkTemplate"
        });

        res.json({
            message: "Xóa thành công mẫu công việc",
            template: template,
            privileges: privileges
        });
    } catch (error) {
        res.json({ message: error });
    }
}
