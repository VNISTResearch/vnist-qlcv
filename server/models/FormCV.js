const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = require('../models/Role');
const Group = require('../models/Group');
const User = require('../models/User');

// Create Schema
const FormCVSchema = new Schema({
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
	action: [
		{
			role: {
				type: Schema.Types.ObjectId,
				ref: Role,
				required: true
			},
			group: {
				type: Schema.Types.ObjectId,
				ref: Group,
				required: true
			}
		}
	]
});

module.exports = FormCV = mongoose.model("form_cvs", FormCVSchema);