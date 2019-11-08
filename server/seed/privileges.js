const Privilege = require('../models/Privilege.model');
const mongoose = require("mongoose");

// DB Config
const db = 'mongodb+srv://qlcv:thai135@cluster0-zqzcq.mongodb.net/test?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

var privileges = [
    {
        resource:'5dc4b5a70ee1b70da9430ed2',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dc4b5a70ee1b70da9430ed3',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dc4b5a70ee1b70da9430ed4',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dc4b5a70ee1b70da9430ed5',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dc4b5a70ee1b70da9430ed6',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    }
];

Privilege.insertMany(privileges)
    .then(res => console.log(res))
    .catch(err => console.log(err));