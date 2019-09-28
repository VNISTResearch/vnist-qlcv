const FormCV = require('../models/FormCV');
const ChucDanh = require('../models/ChucDanh');
const Role = require('../models/Role');
const User = require('../models/User');
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


//3. Seed data formCV -----------------------------//
User.find().exec((err, users) => {
        ChucDanh.find().exec((err, chucdanhs) => {
            var formcvs = [
                {
                    name: "Mẫu CV1 Toàn Phòng Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho toàn bộ phận phòng ban Kinh Doanh",
                    action: [
                        chucdanhs[0]._id,
                        chucdanhs[3]._id,
                        chucdanhs[6]._id
                    ]
                },
                {
                    name: "Mẫu CV2 Toàn Phòng Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho toàn bộ phận phòng ban Kinh Doanh",
                    action: [
                        chucdanhs[0]._id,
                        chucdanhs[3]._id,
                        chucdanhs[6]._id
                    ]
                },
                {
                    name: "Mẫu CV3 TP,PP Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho trưởng và phó phòng ban Kinh Doanh",
                    action: [
                        chucdanhs[0]._id,
                        chucdanhs[3]._id
                    ]
                },
                {
                    name: "Mẫu CV1 Toàn Phòng Tài Chính",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban Tài Chính",
                    action: [
                        chucdanhs[2]._id,
                        chucdanhs[5]._id,
                        chucdanhs[8]._id
                    ]
                },
                {
                    name: "Mẫu CV2 Toàn Phòng Tài Chính",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban Tài Chính",
                    action: [
                        chucdanhs[2]._id,
                        chucdanhs[5]._id,
                        chucdanhs[8]._id
                    ]
                },
                {
                    name: "Mẫu CV3 TP Tài Chính",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho trưởng phòng phòng ban Tài Chính",
                    action: [
                        chucdanhs[2]._id,
                    ]
                },
                {
                    name: "Mẫu CV cho bộ phận phòng Kế Hoạch",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho phòng kế hoạch",
                    action: [
                        chucdanhs[1]._id,
                        chucdanhs[4]._id,
                        chucdanhs[7]._id,
                    ]
                },
            ];
            
            FormCV.insertMany(formcvs, function(err, result){
                if(!err){
                    console.log("Seed GroupData :\n" + result);
                }else{
                    console.log(err);
                }
            });
        });
});