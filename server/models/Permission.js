const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PermissionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: [{                 //Array những URL tương ứng với role có thể truy cập vào được
        type: String,
        required: true
    }],
    can: {
        seeFunction: Boolean,
        openFunction: Boolean,
        createForm: Boolean,
        editForm: Boolean,
        deleteForm: Boolean,
    }
});

module.exports = Permission = mongoose.model("permissions", PermissionSchema);