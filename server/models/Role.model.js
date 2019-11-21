const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Company = require('../models/Company.model');

// Create Schema
const RoleSchema = new Schema({
    name: { //Tên của role
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: Company
    },
    abstract: [{ //có tất cả các quyền của những role bên trong mảng này
        type: Schema.Types.ObjectId,
        replies: this
    }]
},{
    timestamps: true
});

module.exports = Role = mongoose.model("roles", RoleSchema);