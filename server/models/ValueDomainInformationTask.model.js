const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model lưu thông tin của các nhãn thông tin nhập liệu cho công việc
const ValueDomainInformationTaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = ValueDomainInformationTask = mongoose.model("value_domain_info_task", ValueDomainInformationTaskSchema);