const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GroupSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Group = mongoose.model("groups", GroupSchema);