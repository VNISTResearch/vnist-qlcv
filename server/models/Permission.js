const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PermissionSchema = new Schema({

    link: {
        access: Boolean
    },
    component: {
        see: Boolean,
        open: Boolean,
        edit: Boolean,
        delete: Boolean
    }
});

module.exports = Permission = mongoose.model("permissions", PermissionSchema);