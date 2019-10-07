const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
const Role = require('./Role.model');

// Create Schema
const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    deans: [{
        type: Schema.Types.ObjectId,
        ref: User
    }],
    vice_deans: [{
        type: Schema.Types.ObjectId,
        ref: User
    }],
    employees: [{
        type: Schema.Types.ObjectId,
        ref: User
    }],
    role: {
        dean: {
            type: Schema.Types.ObjectId,
            ref: Role   
        },
        vice_dean: {
            type: Schema.Types.ObjectId,
            ref: Role 
        },
        employee: {
            type: Schema.Types.ObjectId,
            ref: Role 
        }
    },
    timestamps: true
});

module.exports = Department = mongoose.model("departments", DepartmentSchema);