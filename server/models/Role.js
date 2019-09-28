const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PerLink = require('./PerLink');

// Create Schema
const RoleSchema = new Schema({

  name: {
      type: String,
      required: true
  },
  perlink: {
    type: Schema.Types.ObjectId,
    ref: PerLink,
    required: true
  }

});

module.exports = Role = mongoose.model("roles", RoleSchema);