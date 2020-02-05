const ResultTask = require('../models/ResultInformationTask.model');
const mongoose = require("mongoose");

// DB Config
const db = 'mongodb://localhost/test';

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

initRole = async () => {
    var resultInfoTask1 = await ResultTask.create({
        member: "5dcade2bf0343012f09c1187",
        infotask: "5de0fd13b240670f60d65504",
        value: "10"
    });
    var resultInfoTask2 = await ResultTask.create({
        member: "5dcade2bf0343012f09c1187",
        infotask: "5de0fd13b240670f60d65504",
        value: "sàasfsdfadf"
    });

    console.log("Load success Role Data: ", resultInfoTask1, resultInfoTask2);
}

try {
    initRole();
} catch (error) {
    console.log(error);
}