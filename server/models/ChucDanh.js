const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PerCom = require('./PerCom');

// Create Schema
const ChucDanhSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  percom: {
    type: Schema.Types.ObjectId,
    ref: PerCom,
    required: true
  }
});

module.exports = ChucDanh = mongoose.model("chucdanhs", ChucDanhSchema);