const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = require('./Role');

// Create Schema
const PermissionSchema = new Schema({

    hasPermission: [
        {
            admin: Boolean,
        },
        {
            user: Boolean,
        }
    ]
});

module.exports = Permission = mongoose.model("permissions", PermissionSchema);