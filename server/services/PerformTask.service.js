const mongoose = require("mongoose");
const HistoryWorkingTime = require('../models/HistoryWokingTime.model');
const CommentTask = require('../models/CommentTask.model');
const Task = require('../models/Task.model');
const ActionTask = require('../models/ActionTask.model');
const InformationTaskTemplate = require('../models/InformationTaskTemplate.model');
const TaskFile = require('../models/TaskFile.model');

// Bấm giờ công việc
// Lấy tất cả lịch sử bấm giờ theo công việc
exports.getLogTimer = (req, res) => {
    HistoryWorkingTime.find({ task: req.params.id, user: req.params.user })
        .then(logTimers => res.status(200).json(logTimers))
        .catch(err => res.status(400).json(err));
    console.log("Get all log timer");
}

// Lấy trạng thái bấm giờ hiện tại. Bảng HistoryWorkingTime tìm hàng có endTime là rỗng 
// Nếu có trả về startTimer: true, và time, startTime. Không có trả ver startTimer: false
exports.getTimerStatus = (req, res) => {
    HistoryWorkingTime.findOne({ task: req.params.task, user: req.params.user, stopTimer: null })
        .then(timerStatus => res.status(200).json(timerStatus))
        .catch(err => res.status(400).json(err));
    console.log("Get Timer Status current");
}

// Bắt đầu bấm giờ: Lưu thời gian bắt đầu
exports.startTimer = async (req, res) => {
    try {
        console.log(req.body);
        var timer = await HistoryWorkingTime.create({
            task: req.body.task,
            user: req.body.user,
            start: req.body.startTimer,
            startTimer: req.body.startTimer,
            stopTimer: null,
            time: 0
        });
        res.json({
            message: "Bắt đầu tính giờ",
            timerStatus: timer
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Tạm dừng: Lưu thời gian đã bấm (time)
exports.pauseTimer = async (req, res) => {
    try {
        var timer = await HistoryWorkingTime.findByIdAndUpdate(
            req.params.id, { time: req.body.time, pause: true }, { new: true }
        );

        res.json({
            message: "Tạm dừng tính giờ",
            timerStatus: timer
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Tiếp tục bấm giờ: Cập nhật lại trạng thái bắt đầu (time)
exports.continueTimer = async (req, res) => {
    try {
        var timer = await HistoryWorkingTime.findByIdAndUpdate(
            req.params.id, { startTimer: req.body.startTimer, pause: false }, { new: true }
        );

        res.json({
            message: "Tạm dừng tính giờ",
            timerStatus: timer
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Dừng bấm giờ: Lưu thời gian kết thúc và số giờ chạy (enndTime và time)
exports.stopTimer = async (req, res) => {
    try {
        console.log(req.body);
        var timer = await HistoryWorkingTime.findByIdAndUpdate(
            req.params.id, { stopTimer: req.body.stopTimer, time: req.body.time }, { new: true }
        );
        var task = await Task.findByIdAndUpdate(
            req.body.task, { $inc: { 'time': req.body.time } }, { new: true }
        );
        task = await task.populate('responsible').execPopulate();
        if (task.tasktemplate !== null) {
            var actionTemplates = await ActionTask.find({ tasktemplate: task.tasktemplate._id });
            var informationTemplate = await InformationTaskTemplate.find({ tasktemplate: task.tasktemplate._id });
            res.status(200).json({
                "info": task,
                "actions": actionTemplates,
                "informations": informationTemplate
            })
        } else {
            res.status(200).json({ "info": task });
        }
    } catch (error) {
        res.json({ message: error });
    }
}

// Lấy tất cả bình luận của một công việc
exports.getCommentTask = (req, res) => {
    CommentTask.find({ task: req.params.task })
        .sort({ 'createdAt': 'asc' })
        .populate({ path: 'creator file' })
        .then(commentTasks => res.status(200).json(commentTasks))
        .catch(err => res.status(400).json(err));
}

// Thêm bình luận: Update nội dung bình luận và file đính kèm
exports.createCommentTask = async (req, res) => {
    try {
        // const url = req.protocol + '://' + req.get('host')
        var file = await TaskFile.create({
            name: req.file.filename,
            // url: url + '/client/public/uploadfiles/' + req.file.filename
            url: '/uploadfiles/'+req.file.filename
        })
        console.log(typeof req.body.parent);
        var comment = await CommentTask.create({
            task: req.body.task,
            creator: req.body.creator,
            parent: req.body.parent==="null"?null:req.body.parent,
            content: req.body.content,
            file: file._id
        });
        // var task = await Task.findByIdAndUpdate(
        //     req.body.task, {$push: {comments: comment._id}}, {new: true}
        // );
        comment = await comment.populate('creator file').execPopulate();
        res.json({
            message: "Thêm bình luận thành công",
            commentTask: comment
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Sửa bình luận: Sửa nội dung bình luận và file đính kèm
exports.editCommentTask = async (req, res) => {
    try {
        var comment = await CommentTask.findByIdAndUpdate(
            req.params.id, { content: req.body.content }, { new: true }
        );
        comment = await comment.populate('creator file').execPopulate();
        console.log(comment);
        res.json({
            message: "Chỉnh sửa bình luận",
            commentTask: comment
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Xóa bình luận: Xóa nội dung bình luận và file đính kèm
exports.deleteCommentTask = async (req, res) => {
    try {
        var comment = await CommentTask.findByIdAndDelete(req.params.id); // xóa comment theo id
        res.status(200).json("Xóa bình luận thành công");
    } catch (error) {
        res.json({ message: error });
    }
}