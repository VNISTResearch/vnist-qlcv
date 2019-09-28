const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ChucDanh = require('./ChucDanh');
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
    chucdanh: {
      type: Schema.Types.ObjectId,
      ref: ChucDanh,
      required: true
    }
  }]
});

module.exports = User = mongoose.model("users", UserSchema);