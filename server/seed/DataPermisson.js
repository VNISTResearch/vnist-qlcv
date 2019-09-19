const Group = require('../models/Group');
const Permission = require('../models/Permission');


//1. Seed data permission---------------------------//
var permissions = [
    {
        link: {
            access: true
        },
        component: {
            see: true,
            open: true,
            edit: true,
            delete: true
        }
    },
    {
        link: {
            access: true
        },
        component: {
            see: true,
            open: true,
            edit: false,
            delete: false
        }
    },
    {
        link: {
            access: false
        },
        component: {
            see: true,
            open: false,
            edit: false,
            delete: false
        }
    }
];

Permission.insertMany(permissions, function(err, result){
    if(!err){
        console.log("Seed Permission Data :\n" + result);
    }else{
        console.log(err);
    }
});


