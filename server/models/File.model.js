const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FileSchema = new Schema({
    owner: { //lưu id của đối tượng sở hữu tương ứng có thể là comment hoặc task
        type: Schema.Types.ObjectId,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['CommentTask', 'Task'],
        required: true
    }
});

module.exports = File = mongoose.model("files", FileSchema);