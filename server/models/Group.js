const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = require('./Role');

// Create Schema
const GroupSchema = new Schema({
  name_group: {
    type: String,
    required: true
  },
  id_role: {
    type: Schema.Types.ObjectId,
    ref: Role,
    required: true
  }
});

module.exports = Group = mongoose.model("groups", GroupSchema);