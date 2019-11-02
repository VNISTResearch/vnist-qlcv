const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Department = require('./Department.model');

// Create Schema
const KPIPersonalSchema = new Schema({
    unit: {
        type: Schema.Types.ObjectId,
        ref: Department,
        required: true
    },
    creater: {
        type: Schema.Types.ObjectId,
        // ref: User,
        required: true
    },
    approver: {
        type: Schema.Types.ObjectId,
        // ref: User,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    criteria: {
        type: String,
        required: true
    },
    confirm: {
        type: Boolean,
        required: true
    },
    approve: {
        type: Boolean,
        required: true
    },
    evaluate: {
        type: Boolean,
        required: true
    }
});

module.exports = KPIPersonal = mongoose.model("kpipersonals", KPIPersonalSchema);