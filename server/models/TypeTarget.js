const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TypeTargetSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = TypeTarget = mongoose.model("TypeTarget", TypeTargetSchema);