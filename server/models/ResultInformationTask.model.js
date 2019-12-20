const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
const InfoTask = require('./InformationTaskTemplate.model');
const LabelInfoTask = require('./LabelInformationTask.model');

// Model quản lý kết quả của các thông tin công việc theo mẫu
const ResultInfoTaskSchema = new Schema({
    responsible:{
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    InfoTask: {
        type: Schema.Types.ObjectId,
        ref: InfoTask,
        required: true
    },
    label: {
        type: Schema.Types.ObjectId,
        ref: LabelInfoTask
    },
    value: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = ResultInfoTask = mongoose.model("result_info_tasks", ResultInfoTaskSchema);