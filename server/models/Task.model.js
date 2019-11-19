const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
const KPIPersonal = require('./KPIPersonal.model');
const Department = require('./Department.model');
const TaskTemplate = require('./TaskTemplate.model');

// Create Schema
const TaskSchema = new Schema({
    unit: {
        type: Schema.Types.ObjectId,
        ref: Department,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Đang chờ",
        required: true
    },
    tasktemplate: {
        type: Schema.Types.ObjectId,
        ref: TaskTemplate,
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: Role,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        replies: this
    },
    level: {
        type: Number,
        required: true
    },
    kpi:[{
        type: Schema.Types.ObjectId,
        ref: KPIPersonal,
        required: true
    }],
    responsible: [{
        type: Schema.Types.ObjectId,
        ref: User,
        required:  true
    }],
    accounatable: [{
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    }],
    consulted: [{
        type: Schema.Types.ObjectId,
        ref: User
    }],
    informed: [{
        type: Schema.Types.ObjectId,
        ref: User
    }]
}, {
    timestamps: true
});

module.exports = Task = mongoose.model("tasks", TaskSchema);