const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = require('./Role.model');
const Department = require('./Department.model');
const Action = require('./Action.model');

// Create Schema
const PrivilegeSchema = new Schema({
    role: {
        type: Schema.Types.ObjectId,
        ref: Role,
        required: true
    },
    resource: {
        type: Schema.Types.ObjectId,
        refPath: 'resourceType',
        required: true
    },
    resource_type: {
        type: String,
        enum: ['Link', 'WorkTemplate'],
        required: true
    },
    action: { //luu id cua hanh dong tuong ung
        type: Schema.Types.ObjectId,
        ref: Action,
        required: true
    }
});

module.exports = Privilege = mongoose.model("privileges", PrivilegeSchema);