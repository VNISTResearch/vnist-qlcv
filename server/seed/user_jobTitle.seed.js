const User = require('../models/user.model');
const JobTitle = require('../models/jobTitle.model');
const UserJobTitle = require('../models/user-jobTitle.model');
const mongoose = require("mongoose");

// DB Config
const db = require("../config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

addJobTitle = async (user_id, job_id) => {
    try {
        var result = await UserJobTitle.create({
            user_id: user_id,
            jobTitle_id: job_id
        });
        console.log("Success Data User-JobTitle: ", result);
    } catch (error) {
        console.log(error);
    }
}

JobTitle.find().exec((err, jobs) => {
    User.find().exec((err, users) => {
		addJobTitle(users[0], jobs[0]); //trưởng phòng phòng kế hoạch
		addJobTitle(users[1], jobs[1]); //phó phòng phòng kế hoạch
		addJobTitle(users[2], jobs[2]); //nhân viên phòng kế hoạch
		addJobTitle(users[3], jobs[2]); //nhân viên phòng kế hoạch

		addJobTitle(users[0], jobs[11]); //nhân viên phòng kĩ thuật
		addJobTitle(users[1], jobs[11]); //nhân viên phòng kĩ thuật
		addJobTitle(users[2], jobs[11]); //nhân viên phòng kĩ thuật
		addJobTitle(users[3], jobs[11]); //nhân viên phòng kĩ thuật
    });
});