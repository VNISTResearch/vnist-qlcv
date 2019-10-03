const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoleSchema = new Schema({
    name: { //Tên của role
        type: String,
        required: true
    },
    parents: [{ //những role có vị trí cao hơn role hiện tại
        type: Schema.Types.ObjectId,
        required: true
    }]
});

module.exports = Role = mongoose.model("roles", RoleSchema);