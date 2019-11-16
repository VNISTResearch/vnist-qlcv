const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LoggerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = Logger = mongoose.model("logger", LoggerSchema);