const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobTitleSchema = new Schema({
    name: {                  //Tên của JobTitle
        type: String,
        required: true
    },
    parents: [{  
        type: Schema.Types.ObjectId,           //Mảng những JobTitle cha của JobTitle hiện tại
        required: true
    }]
});

module.exports = JobTitle = mongoose.model("jobtitles", JobTitleSchema);