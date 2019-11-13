const Company = require('../models/Company.model');

exports.get = (req, res) => {
    Company.find()
        .then(coms => res.status(200).json(coms))
        .catch(err => res.status(400).json({msg: err}));
    console.log("Get All Company");
}

exports.create = (req, res) => {
    Company.create({
        name: req.body.name,
        description: req.body.description
    })
    .then( com => res.status(200).json({ 
        msg: 'Create company successfully!',
        company: com
    }))
    .catch(err => res.status(400).json({
        msg: 'Create company failed!',
        error: err
    }));
}