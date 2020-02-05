const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model lưu các giá trị mặc định cho trường thông tin của mẫu công việc với kiểu nhãn (label)
const LabelInfomationTaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = LabelInfomationTask = mongoose.model("label_info_task", LabelInfomationTaskSchema);