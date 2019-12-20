const PerformTaskService = require('../services/PerformTask.service');

// Điều hướng đến dịch vụ cơ sở dữ liệu của module thực hiện công việc
// Lấy tất tả lịch sử bấm giờ của một công việc
exports.getLogTimer = (req, res) => {
    return PerformTaskService.getLogTimer(req, res);
}

// Lấy trạng thái bấm giờ hiện tai (chưa kết thúc)
exports.getTimerStatus = (req, res) => {
    return PerformTaskService.getTimerStatus(req, res);
}

// Bắt đầu bấm giờ
exports.startTimer = (req, res) => {
    return PerformTaskService.startTimer(req, res);
}

// Tạm dừng bấm giờ
exports.pauseTimer = (req, res) => {
    return PerformTaskService.pauseTimer(req, res);
}

// Tiếp tục bấm giờ
exports.continueTimer = (req, res) => {
    return PerformTaskService.continueTimer(req, res);
}

// Kết thúc bấm giờ
exports.stopTimer = (req, res) => {
    return PerformTaskService.stopTimer(req, res);
}

// Lấy tất cả bình luận và hoạt động của một công việc
exports.getCommentTask = (req, res) => {
    return PerformTaskService.getCommentTask(req, res);
}

// Tạo một bình luận hoặc hoạt động cho công việc
exports.createCommentTask = (req, res) => {
    return PerformTaskService.createCommentTask(req, res);
}

// Chỉnh sửa một hoạt động hoặc bình luận
exports.editCommentTask = (req, res) => {
    return PerformTaskService.editCommentTask(req, res);
}

// Xóa bỏ một bình luận hoặc hoạt động
exports.deleteCommentTask = (req, res) => {
    return PerformTaskService.deleteCommentTask(req, res);
}