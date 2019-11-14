const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
const Role = require('./Role.model');
var findOrCreate = require('mongoose-findorcreate');

// Create Schema
const UserRoleSchema = new Schema({
    id_user: [{ //Mảng các users có cùng role
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    }],
    id_role: { //Tên của role
        type: Schema.Types.ObjectId,
        ref: Role,
        required: true
    }
});

UserRoleSchema.plugin(findOrCreate);

module.exports = UserRole = mongoose.model("user_role", UserRoleSchema);