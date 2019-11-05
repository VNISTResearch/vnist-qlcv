const JobTitle = require('../models/JobTitle.model');

exports.get = async (req, res) => {
    try {
        var jobs = await JobTitle.find();

        res.json({
            message: "Get all jobtitles",
            content: jobs
        });
    } catch (error) {

        res.json({ message: error });
    }
}