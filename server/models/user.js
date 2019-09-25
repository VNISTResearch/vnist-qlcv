const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Group = require('./Group');
const Role = require('./Role');

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  has: [{
    role: {
      type: Schema.Types.ObjectId,
      ref: Role,
      required: true
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: Group,
      required: true
    }
  }]
});

module.exports = User = mongoose.model("users", UserSchema);