const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EmployeeSchema = new Schema({
    fullName: {
        type: String,
        //required: true
    },
    employeeNumber: {
        type: String,
        //required: true
    },
    MSCC: {
        type: String,
        //required: true
    },
    gender: {
        type: String,
        //required: true
    },
    brithday: {
        type: Date,
        //default: null,
        //required: true
    },
    birthplace: {
        type: String,
        //default: null,
        // required: true
    },
    CMND: {
        type: Number,
        //default: null,
        //required: true
    },
    dateCMND: {
        type: Date,
        //default: null,
        //required: true
    },
    addressCMND: {
        type: String,
        //default: null,
        //required: true
    },
    phoneNumber: {
        //type: Number,
        //required: true
    },
    emailCompany: {
        type: String,
        //required: true
    },
    MST: {
        type: Number,
        //default: null,
        //required: true
    },
    ATM: {
        type: String,
        //default: null,
        //required: true
    },
    nameBank: {
        type: String,
        //default: null,
        //required: true
    },
    numberBHYT: {
        type: String,
        //default: null,
        //required: true
    },
    national: {
        type: String,
        //default: null,
        //required: true
    },
    religion: {
        type: String,
        //default: null,
        //required: true
    },
    relationship: {
        type: String,
        //required: true
    },
    cultural: {
        type: String,
        //default: null,
        //required: true
    },
    foreignLanguage: {
        type: String,
        //default: null,
        //required: true
    },
    educational: {
        type: String,
        //default: null,
        //required: true
    },
    certificate: {
        type: Schema.Types.ObjectId,
        //default: {
        // "abc": "dsad",
        // "sdasd": "dssda"
        //},
        //required: true
    },
    experience: {
        type: Schema.Types.ObjectId,
        //default: {
        //"abc": "dsad",
        // "sdasd": "dssda"
        //},
        //required: true
    },
    department: {
        type: String,
        //default: null,
        //required: true
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