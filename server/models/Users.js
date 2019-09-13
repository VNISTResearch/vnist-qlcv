const mongoose = require('mongoose');
const Staff = mongoose.model('Staffs', storySchema);
const Roles = mongoose.model('Roles', storySchema);

var users = new mongoose.Schema({ 
    email: {type: 'string', unique: true, lowercase: true}, 
    password: {type: 'string'}, 
    staff_id: {type: Schema.Types.ObjectId, ref: "Staff"},
    roles: {type: Schema.Types.ObjectId, ref : 'Roles'}
}, {collection: 'Users'}, {timestamps: true});

module.exports = mongoose.model('Users', users);
