const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LinkSchema = new Schema({
    type: {
        type: String, //public - private
        require: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = Link = mongoose.model("links", LinkSchema);