const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ComponentSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = Component = mongoose.model("components", ComponentSchema);