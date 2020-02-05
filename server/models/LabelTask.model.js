const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model lưu thông tin của các thẻ cân bằng của mục tiêu
const LabelTargetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = LabelTarget = mongoose.model("label_target", LabelTargetSchema);