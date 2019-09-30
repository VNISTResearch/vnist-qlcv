const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User.model');
const JobTitle = require('./JobTitle.model');

// Create Schema
const WorkTemplateSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	creator: {
		type: Schema.Types.ObjectId,
		ref: User,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	permisson: [
		{
			jobTitleId:{
				type: Schema.Types.ObjectId,
                ref: JobTitle,
                required: true
			},
			can: {
                see: Boolean,
                open: Boolean,
                create: Boolean,
                edit: Boolean,
                delete: Boolean
			}
		}

	]
});

module.exports = WorkTemplate = mongoose.model("worktemplates", WorkTemplateSchema);