const PerformTaskService = require('../services/PerformTask.service');

exports.getLogTimer = (req, res) => {
    return PerformTaskService.getLogTimer(req, res);
}

exports.getTimerStatus = (req, res) => {
    return PerformTaskService.getTimerStatus(req, res);
}

exports.startTimer = (req, res) => {
    return PerformTaskService.startTimer(req, res);
}

exports.pauseTimer = (req, res) => {
    return PerformTaskService.pauseTimer(req, res);
}

exports.stopTimer = (req, res) => {
    return PerformTaskService.stopTimer(req, res);
}

exports.getCommentTask = (req, res) => {
    return PerformTaskService.getCommentTask(req, res);
}

exports.createCommentTask = (req, res) => {
    return PerformTaskService.createCommentTask(req, res);
}

exports.editCommentTask = (req, res) => {
    return PerformTaskService.editCommentTask(req, res);
}

exports.deleteCommentTask = (req, res) => {
    return PerformTaskService.deleteCommentTask(req, res);
}