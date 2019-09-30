const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DeparmentSchema = new Schema({
    name: {                //Tên của phòng ban
        type: String,
        required: true
    }
});

module.exports = Deparment = mongoose.model("deparments", DeparmentSchema);