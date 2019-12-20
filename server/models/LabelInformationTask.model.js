const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model lưu thông tin của các nhãn thông tin nhập liệu cho công việc
const LabelInformationTaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = LabelInformationTask = mongoose.model("label_info_task", LabelInformationTaskSchema);