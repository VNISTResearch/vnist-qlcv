const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const departments = require("./routes/api/departments");
const tasktemplates = require("./routes/api/tasktemplates");
const roles = require("./routes/api/roles");
const links = require("./routes/api/links");
const components = require("./routes/api/components");
const worktemplates = require("./routes/api/worktemplates");
const jobtitles = require("./routes/api/jobtitles");
const kpiunits = require("./routes/api/kpiunits");
const kpipersonals = require("./routes/api/kpipersonals");

const cors = require('cors');
require('dotenv').config();

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
const db = process.env.DATABASE;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
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
app.use("/tasktemplates", tasktemplates);
app.use("/roles", roles);
app.use("/links", links);
app.use("/components", components);
app.use("/worktemplates", worktemplates);
app.use("/jobtitles", jobtitles);
app.use("/kpiunits", kpiunits);
app.use("/kpipersonals", kpipersonals);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));