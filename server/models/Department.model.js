const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // id_parent?
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Department = mongoose.model("departments", DepartmentSchema);