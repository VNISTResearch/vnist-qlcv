const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Task = require('./Task.model');
// Create Schema
const HistoryWorkingTimeSchema = new Schema({
    task: { //lưu id của công việc 
        type: Schema.Types.ObjectId,
        ref: Task,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date
    },
    time: {
        type: Number
    }
});

module.exports = HistoryWorkingTime = mongoose.model("history_working_times", HistoryWorkingTimeSchema);