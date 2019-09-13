const mongoose = require('mongoose');
var department = new mongoose.Schema({ name: 'string', describe: 'string', parent_id: "string" }, {collection: 'department'});
module.exports = mongoose.model('Department', department)