const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');

// Create Schema
const WorkTemplateSchema = new Schema({
    name: { //Tên của work template
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = WorkTemplate = mongoose.model("work_templates", WorkTemplateSchema);
