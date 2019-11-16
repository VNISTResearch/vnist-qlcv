const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EmployeeSchema = new Schema({
    avatar: {
        type: String
    },
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
    certificate: [{
        nameCertificate: String,
        urlCertificate: String
    }],
    experience: [{
        startDate: String,
        endDate: String,
        unit: String,
        position: String
    }],
    contract: [{
        startDate: String,
        endDate: String,
        urlContract: String
    }],
    insurrance: [{
        startDate: String,
        endDate: String,
        cost: String
    }],
    course: [{
        nameCourse: String,
        startDate: String,
        endDate: String,
        unit: String,
        status: String
    }],
    department: [{
        nameDepartment: String,
        position: String
    }],
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