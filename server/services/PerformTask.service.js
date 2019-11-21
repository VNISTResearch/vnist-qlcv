const mongoose = require("mongoose");
const Task = require('../models/Task.model');
const ActionTask = require('../models/ActionTask.model');
const HistoryWorkingTime = require('../models/HistoryWokingTime.model');
const File = require('../models/File.model');
const CommentTask = require('../models/CommentTask.model');
const InfomationTask = require('../models/InformationTaskTemplate.model');

// Bấm giờ công việc
// Lấy trạng thái bấm giờ hiện tại. Bảng HistoryWorkingTime tìm hàng có endTime là rỗng 
// Nếu có trả về startTimer: true, và time, startTime. Không có trả ver startTimer: false
exports.getTimerStatus = (req, res) => {
    HistoryWorkingTime.find()
}

// Bắt đầu bấm giờ: Lưu thời gian bắt đầu
exports.startTimer = (req, res) => {
   
}

// Tạm dừng: Lưu thời gian đã bấm (time)
exports.pauseTimer = async (req, res) => {
    
}

// Dừng bấm giờ: Lưu thời gian kết thúc và số giờ chạy (enndTime và time)
exports.stopTimer = async (req, res) => {
    
}

// Thêm bình luận: Update nội dung bình luận và file đính kèm

// Sửa bình luận: Sửa nội dung bình luận và file đính kèm

// Xóa bình luận: Xóa nội dung bình luận và file đính kèm

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