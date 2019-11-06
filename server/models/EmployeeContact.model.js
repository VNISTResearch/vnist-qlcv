const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EmployeeContactSchema = new Schema({
    nowAddress: {
        type: String,
        required: true
    },
    nativeLand: {
        type: Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = EmployeeContact = mongoose.model("employeeContacts", EmployeeContactSchema);