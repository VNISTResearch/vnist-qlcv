const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PerComSchema = new Schema({
    can: {
        seeFunction: Boolean,
        openFunction: Boolean,
        createForm: Boolean,
        editForm: Boolean,
        deleteForm: Boolean,
    }
});

module.exports = PerCom = mongoose.model("percoms", PerComSchema);