const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ActionTaskTemplateSchema = new Schema({
    owner: { //lưu id của đối tượng sở hữu tương ứng có thể là task hoặc task template
        type: Schema.Types.ObjectId,
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
        enum: ['TaskTemplate', 'Task'],
        required: true
    }
});

module.exports = ActionTaskTemplate = mongoose.model("action_task", ActionTaskTemplateSchema);