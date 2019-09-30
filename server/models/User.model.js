const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const JobTitle = require('./JobTitle.model');
const Role = require('./Role.model');

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
    deparment: {
      type: Schema.Types.ObjectId,
      ref: JobTitle,
      required: true
    }
  }]
});

module.exports = User = mongoose.model("users", UserSchema);