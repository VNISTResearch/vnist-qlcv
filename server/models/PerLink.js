const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PerLinkSchema = new Schema({
    url: [{                 //Array những URL tương ứng với role có thể truy cập vào được
        type: String,
        required: true
    }]
});

module.exports = PerLink = mongoose.model("perlinks", PerLinkSchema);