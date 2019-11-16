const JobTitleService = require('../services/KPI/JobTitle.service');

exports.get = (req, res) => {
    return JobTitleService.get(req, res);
};