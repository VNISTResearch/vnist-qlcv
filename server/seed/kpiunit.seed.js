const KPIUnit = require('../models/KPIUnit.model');
const mongoose = require("mongoose");
ObjectId = require('mongodb').ObjectID;

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

initKPIUnit = async () => {
    var kpiunit = await KPIUnit.create({
        unit: '5da6c65a2add902300313be0',
        name: "Mục tiêu số I",
        parent: 'a0000000000000000000001',
        time: "10-2019",
        weight: 20,
        criteria: "Doanh thu tháng 10 đạt 350 triệu"
    });

    console.log("Load success Role Data: ", kpiunit);
}

try {
    initKPIUnit();
} catch (error) {
    console.log(error);
}