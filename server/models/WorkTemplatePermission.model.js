const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = require('./Role.model');

// Create Schema
const WorkTemplatePermissionSchema = new Schema({
	role:{
		type: Schema.Types.ObjectId,
		ref: Role,
		required: true
	},
	can: {
		see: Boolean,
		open: Boolean,
		create: Boolean,
		edit: Boolean,
		delete: Boolean
	}
});

module.exports = WorkTemplatePermission = mongoose.model("worktemplate_permissions", WorkTemplatePermissionSchema);