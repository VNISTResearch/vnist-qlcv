const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoleSchema = new Schema({
    name: { //Tên của role
        type: String,
        required: true
    },
    childrens: [{ //những role con của role hiện tại
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true
});

module.exports = Role = mongoose.model("roles", RoleSchema);