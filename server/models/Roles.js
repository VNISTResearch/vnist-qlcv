const mongoose = require('mongoose');

var roles = new mongoose.Schema({ 
    name: {type: 'string', required: true}, 
    slug: {type: 'string', required: true}, 
}, {collection: 'Roles'}, {timestamps: true});

module.exports = mongoose.model('Roles', roles);