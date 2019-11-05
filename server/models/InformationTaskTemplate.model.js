const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskTemplate = require('./TaskTemplate.model');

// Create Schema
const InformationTaskTemplateSchema = new Schema({
    tasktemplate: { //lưu id của mẫu công việc tương ứng
        type: Schema.Types.ObjectId,
        ref: TaskTemplate,
        required: true
    },
    key: {
        type: String,
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
    mandatary: { // Hoạt động này bắt buộc hay không?
        type: Boolean,
        default: true,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = InformationTaskTemplate = mongoose.model("information_task_templates", InformationTaskTemplateSchema);