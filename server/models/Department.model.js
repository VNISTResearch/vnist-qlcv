const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = require('./Role.model');

// Create Schema
const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
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
},{
    timestamps: true
});

module.exports = Department = mongoose.model("departments", DepartmentSchema);