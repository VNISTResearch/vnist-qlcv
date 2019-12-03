const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');
const {role} = require('../../middleware/role');

const PerformTaskController = require("../../controllers/PerformTaskController");

router.get('/log-timer/:task/:user', auth, PerformTaskController.getLogTimer);
router.get('/log-timer/currentTimer/:task/:user', auth, PerformTaskController.getTimerStatus);
router.post('/log-timer/start-timer', auth, PerformTaskController.startTimer);
router.put('/log-timer/pause-timer/:id', auth, PerformTaskController.pauseTimer);
router.put('/log-timer/stop-timer/:id', PerformTaskController.stopTimer);

router.get('/comment-task/:task', auth, PerformTaskController.getCommentTask);
router.post('/comment-task/create', PerformTaskController.createCommentTask);
router.put('/comment-task/:id', auth, PerformTaskController.editCommentTask);
router.delete('/comment-task/:id', auth, PerformTaskController.deleteCommentTask);

module.exports = router;