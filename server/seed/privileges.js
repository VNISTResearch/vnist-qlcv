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
        resource:'5dbacf96c7292e10589c05f4',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dbacf96c7292e10589c05f5',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dbacf96c7292e10589c05f6',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dbacf96c7292e10589c05f7',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dbacf96c7292e10589c05f8',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dbacf96c7292e10589c05f9',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dbacf96c7292e10589c05fa',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },{
        resource:'5dbacf96c7292e10589c05fb',
        resource_type: 'Link',
        role: ['5dbad298524b981014cdf3de']
    },
];

Privilege.insertMany(privileges)
    .then(res => console.log(res))
    .catch(err => console.log(err));