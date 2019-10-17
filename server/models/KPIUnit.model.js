const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Department = require('./Department.model');

// Create Schema
const KPIUnitSchema = new Schema({
    unit: {
        type: Schema.Types.ObjectId,
        ref: Department,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
    },
    time: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    criteria: {
        type: String,
        required: true
    }
});

module.exports = KPIUnit = mongoose.model("kpiunits", KPIUnitSchema);