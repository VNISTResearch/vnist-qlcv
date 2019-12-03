const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
const KPIPersonal = require('./KPIPersonal.model');
const Department = require('./Department.model');
const TaskTemplate = require('./TaskTemplate.model');

// Create Schema
const ResultTaskSchema = new Schema({
    task: {
        type: Schema.Types.ObjectId,
        ref: Department,
        required: true
    },
    responsible:{
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    personalpoint: {
        type: Number
    },
    approverpoint: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = ResultTaskSchema = mongoose.model("result_tasks", ResultTaskSchemaSchema);