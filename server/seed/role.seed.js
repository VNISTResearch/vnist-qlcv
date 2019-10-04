const Role = require('../models/role.model');
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

initRole = async () => {
    var truongPhong = await Role.create({
        name: "Trưởng Phòng",
        parents: []
    });

    var phoPhong = await Role.create({
        name: "Phó Phòng",
        parents: [truongPhong._id]
    });

    var nhanVien = await Role.create({
        name: "Nhân Viên",
        parents: [truongPhong._id, phoPhong._id]
    });

    console.log("Load success Role Data: ", truongPhong, phoPhong, nhanVien);
}

try {
    initRole();
} catch (error) {
    console.log(error);
}