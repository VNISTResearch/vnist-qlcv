const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LoggerSchema = new Schema({
    log: {
        type: Boolean,
        required: true
    }
});

module.exports = Logger = mongoose.model("logger", LoggerSchema);