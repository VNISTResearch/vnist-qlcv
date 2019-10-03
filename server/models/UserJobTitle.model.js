const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
const JobTitle = require('./JobTitle.model');

// Create Schema
const UserJobTitleSchema = new Schema({
    user_id: { //Tên của role
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    jobTitle_id: { //Tên của role
        type: Schema.Types.ObjectId,
        ref: JobTitle,
        required: true
    }  
});

module.exports = UserJobTitle = mongoose.model("user_jobTitle", UserJobTitleSchema);