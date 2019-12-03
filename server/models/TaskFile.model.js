const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TaskFileSchema = new Schema({
    owner: { //lưu id của đối tượng sở hữu tương ứng có thể là comment hoặc task
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = TaskFile = mongoose.model("task_files", TaskFileSchema);