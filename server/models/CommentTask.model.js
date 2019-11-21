const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Task = require('./Task.model');
const ActionTask = require('./ActionTask.model');
const User = require('./User.model');

// Create Schema
const CommentTaskSchema = new Schema({
    task: { //lưu id của công việc 
        type: Schema.Types.ObjectId,
        ref: Task,
        required: true
    },
    actionTask: {
        type: Schema.Types.ObjectId,
        ref: ActionTask,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        replies: this
    },
    content: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = CommentTask = mongoose.model("comment_tasks", CommentTaskSchema);