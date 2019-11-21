const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
},{
    timestamps: true
});

module.exports = Company = mongoose.model("companies", CompanySchema);