const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = require('./Role.model');
const Department = require('./Department.model');

// Create Schema
const PrivilegeSchema = new Schema({
    role: {
        type: Schema.Types.ObjectId,
        ref: Role,
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: Department,
        required: true
    },
    resource: {
        type: Schema.Types.ObjectId,
        refPath: 'resourceType',
        required: true
    },
    resourceType: {
        type: String,
        enum: ['Link', 'WorkTemplate'],
        required: true
    },
    action: [{
        type: String,
        required: true
    }]
});

module.exports = Privilege = mongoose.model("privileges", PrivilegeSchema);