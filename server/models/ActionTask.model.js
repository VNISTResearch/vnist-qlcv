const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ActionTaskTemplateSchema = new Schema({
    tasktemplate: {
        type: Schema.Types.ObjectId,
        ref: TaskTemplate,
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
    }
});

module.exports = ActionTaskTemplate = mongoose.model("action_task", ActionTaskTemplateSchema);