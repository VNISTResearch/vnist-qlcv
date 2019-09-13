const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var departmentModel = require('./models/Department.js');

const app = express();

//Body parser middware
app.use(bodyParser.json());

//DB config
const db = require('./config/key').mongoURI;

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
departmentModel.find({}, function(err, data){
        if(err) console.log(err);
        console.log(data);
    })
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server start on port ${port}`));