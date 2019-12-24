const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const departments = require("./routes/api/departments");
const worktemplates = require("./routes/api/worktemplates");
const jobtitles = require("./routes/api/jobtitles");
const kpiunits = require("./routes/api/kpiunits");
const kpipersonals = require("./routes/api/kpipersonals");
const employees = require("./routes/api/employees");
const tranningcourse = require("./routes/api/tranningcourse");
const cors = require('cors');

const app = express();

// Bodyparser middleware
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db, {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/users", users);
app.use("/departments", departments);
app.use("/worktemplates", worktemplates);
app.use("/jobtitles", jobtitles);
app.use("/kpiunits", kpiunits);
app.use("/kpipersonals", kpipersonals);
app.use("/employees", employees);
app.use("/tranningcourse", tranningcourse);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));