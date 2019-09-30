const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User');
const ChucDanh = require('./ChucDanh');

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
			type: Schema.Types.ObjectId,
			ref: ChucDanh,
			required: true
		}
	]
});

module.exports = FormCV = mongoose.model("form_cvs", FormCVSchema);