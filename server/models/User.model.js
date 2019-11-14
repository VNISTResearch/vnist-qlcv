const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    delete_soft: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
});

module.exports = User = mongoose.model("users", UserSchema);