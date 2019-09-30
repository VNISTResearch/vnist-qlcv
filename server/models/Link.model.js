const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LinkSchema = new Schema({

    //Array những URL tương ứng với những Role nào có thể được truy cập vào
    url: [{                 
        type: String,
        required: true
    }]

});

module.exports = Link = mongoose.model("links", LinkSchema);