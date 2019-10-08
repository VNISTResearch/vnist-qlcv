const Role = require('../models/Role.model');

exports.get = async (req, res) => {
    try {
        var roles = await Role.find();

        res.json({
            message: "Get all roles",
            content: roles
        });
    } catch (error) {

        res.status(400).json( {message: error});
    }
}