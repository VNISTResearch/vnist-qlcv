const mongoose = require("mongoose");
const HistoryWorkingTime = require('../models/HistoryWokingTime.model');
const CommentTask = require('../models/CommentTask.model');

// Bấm giờ công việc
// Lấy tất cả lịch sử bấm giờ theo công việc
exports.getLogTimer = (req, res) => {
    HistoryWorkingTime.find({ task: req.params.id })
        .then(logTimers => res.status(200).json(logTimers))
        .catch(err => res.status(400).json(err));
    console.log("Get all log timer");
}

// Lấy trạng thái bấm giờ hiện tại. Bảng HistoryWorkingTime tìm hàng có endTime là rỗng 
// Nếu có trả về startTimer: true, và time, startTime. Không có trả ver startTimer: false
exports.getTimerStatus = (req, res) => {
    HistoryWorkingTime.find({ task: req.params.id, endTime: null })
        .then(timerStatus => res.status(200).json(timerStatus))
        .catch(err => res.status(400).json(err));
    console.log("Get Timer Status current");
}

// Bắt đầu bấm giờ: Lưu thời gian bắt đầu
exports.startTimer = async (req, res) => {
    try {
        var timer = await HistoryWorkingTime.create({
            task: req.body.task,
            startTime: req.body.startTime
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
            req.params.id, { time: req.body.time }, { new: true }
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
        var timer = await HistoryWorkingTime.findByIdAndUpdate(
            req.params.id, { endTime: req.body.endTime, Ttime: req.body.time }, { new: true }
        );
        res.json({
            message: "Đã dừng tính giờ",
            timerStatus: timer
        });
    } catch (error) {
        res.json({ message: error });
    }
}

// Lấy tất cả bình luận của một công việc
exports.getCommentTask = (req, res) => {
    CommentTask.find({ task: req.params.task })
        .sort({ 'createdAt': 'asc' })
        .populate({ path: 'creator'})
        .then(commentTasks => res.status(200).json(commentTasks))
        .catch(err => res.status(400).json(err));
}
// Thêm bình luận: Update nội dung bình luận và file đính kèm
exports.createCommentTask = async (req, res) => {
    try {
        var comment = await CommentTask.create({
            task: req.body.task,
            actionTask: req.body.actionTask,
            creator: req.body.creator,
            parent: req.body.parent,
            content: req.body.content
        });
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
        res.json({
            message: "Chỉnh sửa bình luận",
            commentTask: comment
        });
    } catch (error) {
        res.json({ message: error });
    }
}
// Xóa bình luận: Xóa nội dung bình luận và file đính kèm
exports.deleteCommentTask = async () => {
    try {
        var comment = await CommentTask.findByIdAndDelete(req.params.id); // xóa mẫu công việc theo id
        res.status(200).json("Xóa bình luận thành công");
    } catch (error) {
        res.status(400).json(error);
    }
}