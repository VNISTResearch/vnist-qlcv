const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
const Role = require('./Role.model');

// Create Schema
const UserJobTitleSchema = new Schema({
    id_user: { //Tên của role
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    id_role: { //Tên của role
        type: Schema.Types.ObjectId,
        ref: Role,
        required: true
    }  
});

module.exports = UserRole = mongoose.model("user_role", UserJobTitleSchema);