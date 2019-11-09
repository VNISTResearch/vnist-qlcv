const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EmployeeSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    employeeNumber: {
        type: String,
        required: true
    },
    MSCC: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    brithday: {
        type: String,
        required: true
    },
    birthplace: {
        type: String
    },
    CMND: {
        type: Number,
        required: true
    },
    dateCMND: {
        type: String,
        required: true
    },
    addressCMND: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    emailCompany: {
        type: String
    },
    MST: {
        type: Number,
        required: true
    },
    ATM: {
        type: String,
        required: true
    },
    nameBank: {
        type: String,
        required: true
    },
    numberBHYT: {
        type: String
    },
    national: {
        type: String
    },
    religion: {
        type: String
    },
    relationship: {
        type: String
    },
    cultural: {
        type: String,
        required: true
    },
    foreignLanguage: {
        type: String
    },
    educational: {
        type: String
    },
    certificate: {
        type: Schema.Types.ObjectId
    },
    experience: {
        type: Schema.Types.ObjectId
    },
    department: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = Employee = mongoose.model("employees", EmployeeSchema);