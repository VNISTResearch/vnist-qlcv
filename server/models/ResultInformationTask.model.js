const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
const InfoTask = require('./InformationTaskTemplate.model');

// Model quản lý kết quả của các thông tin công việc theo mẫu
const ResultInfoTaskSchema = new Schema({
    member:{
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    infotask: {
        type: Schema.Types.ObjectId,
        ref: InfoTask,
        required: true
    },
    value: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = ResultInfoTask = mongoose.model("result_info_tasks", ResultInfoTaskSchema);