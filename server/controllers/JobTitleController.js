const JobTitleService = require('../services/JobTitle.service');

exports.get = (req, res) => {
    return JobTitleService.get(req, res);
};