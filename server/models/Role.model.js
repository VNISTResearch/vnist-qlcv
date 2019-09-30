const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Link = require('./Link.model');

// Create Schema
const RoleSchema = new Schema({

  name: {
      type: String,
      required: true
  },
  access: {
    type: Schema.Types.ObjectId,
    ref: Link,
    required: true
  }

});

module.exports = Role = mongoose.model("roles", RoleSchema);