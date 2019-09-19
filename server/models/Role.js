const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Permission = require('./Permission');

// Create Schema
const RoleSchema = new Schema({

  role_name: {
      type: String,
      required: true
  },
  id_permission: {
    type: Schema.Types.ObjectId,
    ref: Permission,
    required: true
  }

});

module.exports = Role = mongoose.model("roles", RoleSchema);