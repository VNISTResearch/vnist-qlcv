const WorkTemplate = require('../models/WorkTemplate.model');
const Privilege = require('../models/Privilege.model');
const JobTitle = require('../models/JobTitle.model')

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

exports.create = async (req, res) => {
    try {
        var template = await WorkTemplate.create({  //Tạo dữ liệu mẫu công việc
            name: req.body.name,
            creator: req.body.creator,
            description: req.body.description
        });
        var privilege = await Privilege.create({    //Phân quyền cho mẫu công việc 
            role: req.body.role,                    //Id role: TP,PP,NV
            department: req.body.department,        //Id Department
            resource: template._id,                 //Id của worktemplate trong bảng worktemplate
            resourceType: "WorkTemplate",           //Kiểu tài nguyên là WorkTemplate
            action: req.body.action                 //ví dụ [ create, edit, delete]
        });

        //Phân quyền thêm cho role parents của role hiện tại nếu có
        var role = await Role.findById(req.body.role);   //lấy role được phân quyền
        var parents = role.parents;
        if(parents.length > 0){
            parents.map(role => {
                    Privilege.create({                      //Phân quyền cho mẫu công việc 
                    role: role,                             //Id role: TP,PP,NV
                    department: req.body.department,        //Id Department
                    resource: template._id,                 //Id của worktemplate trong bảng worktemplate
                    resourceType: "WorkTemplate",           //Kiểu tài nguyên là WorkTemplate
                    action: req.body.action                 //ví dụ [ create, edit, delete]
                });
            });
        }

        res.json({                                  //trả lại thông tin cho người dùng
            message: "Tạo thành công mẫu công việc!",
            content: {
                worktemplate: template,
                privilege: privilege,
                parents: parents
            }
        });
    } catch (error) {
        res.json({ message: error });
    }
} 