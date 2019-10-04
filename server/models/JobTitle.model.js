const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = require('./Role.model');
const Department = require('./Department.model');

// Create Schema
const JobTitleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: { //lưu id của role tương ứng
        type: Schema.Types.ObjectId,
        ref: Role,
        required: true
    },
    department: { //lưu thông tin phòng ban tương ứng
        type: Schema.Types.ObjectId,
        ref: Department,
        required: true
    }
});

module.exports = JobTitle = mongoose.model("job_titles", JobTitleSchema);
