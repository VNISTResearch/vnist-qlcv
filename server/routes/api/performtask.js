const express = require("express");
const router = express.Router();
const multer = require('multer');
const {auth} = require('../../middleware/auth');
const {role} = require('../../middleware/role');
const DIR = '../client/public/uploadfiles/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        cb(null, true);
    }
});
const PerformTaskController = require("../../controllers/PerformTaskController");

router.get('/log-timer/:task/:user', auth, PerformTaskController.getLogTimer);
router.get('/log-timer/currentTimer/:task/:user', auth, PerformTaskController.getTimerStatus);
router.post('/log-timer/start-timer', PerformTaskController.startTimer);
router.put('/log-timer/pause-timer/:id', PerformTaskController.pauseTimer);
router.put('/log-timer/continue-timer/:id', PerformTaskController.continueTimer);
router.put('/log-timer/stop-timer/:id', PerformTaskController.stopTimer);

router.get('/comment-task/:task', auth, PerformTaskController.getCommentTask);
router.post('/comment-task/create',upload.single('file'), PerformTaskController.createCommentTask);
router.put('/comment-task/:id', PerformTaskController.editCommentTask);
router.delete('/comment-task/:id', PerformTaskController.deleteCommentTask);

module.exports = router;