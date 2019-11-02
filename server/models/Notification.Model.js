const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Department = require('./Department.model');

// Create Schema
const NotificationSchema = new Schema({
    unit: {
        type: Schema.Types.ObjectId,
        ref: Department,
        required: true
    },
    creater: {
        type: Schema.Types.ObjectId,
        // ref: User,
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        // ref: User,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    }
});

module.exports = Notification = mongoose.model("notifications", NotificationSchema);