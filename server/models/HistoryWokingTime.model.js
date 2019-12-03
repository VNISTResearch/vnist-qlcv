const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
// Create Schema
const HistoryWorkingTimeSchema = new Schema({
    task: { //lưu id của công việc 
        type: Schema.Types.ObjectId,
        ref: Task,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
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