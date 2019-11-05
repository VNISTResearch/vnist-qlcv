const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoleSchema = new Schema({
    name: { //Tên của role
        type: String,
        required: true
    },
    abstract: [{ //có tất cả các quyền của những role bên trong mảng này
        type: Schema.Types.ObjectId,
        replies: this
    }]
},{
    timestamps: true
});

module.exports = Role = mongoose.model("roles", RoleSchema);