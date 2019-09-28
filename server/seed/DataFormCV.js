const FormCV = require('../models/FormCV');
const Group = require('../models/Group');
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
    Role.find().exec((err, roles) => {
        Group.find().exec((err, groups) => {
            var formcvs = [
                {
                    name: "Mẫu CV1 Phòng Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban Kinh Doanh",
                    action: [
                        {
                            role: roles[0]._id,//trưởng phòng
                            group: groups[0]._id //phòng kinh doanh
                        },
                        {
                            role: roles[1]._id,//phó phòng
                            group: groups[0]._id//phòng kinh doanh
                        },
                        {
                            role: roles[2]._id,//nhân viên
                            group: groups[0]._id//phòng kinh doanh
                        },
                        
                    ]
                },
                {
                    name: "Mẫu CV1 Phòng Kế Hoạch",
                    creator: users[1]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban kế hoạch",
                    action: [
                        {
                            role: roles[0]._id,//trưởng phòng
                            group: groups[2]._id//phòng kế hoạch
                        },
                        {
                            role: roles[1]._id,//phó phòng
                            group: groups[2]._id//phòng kế hoạch
                        },
                    ]
                },
                {
                    name: "Mẫu CV2 Phòng Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban Kinh Doanh",
                    action: [
                        {
                            role: roles[0]._id,//trưởng phòng
                            group: groups[0]._id //phòng kinh doanh
                        },
                        {
                            role: roles[1]._id,//phó phòng
                            group: groups[0]._id//phòng kinh doanh
                        },
                        {
                            role: roles[2]._id,//nhân viên
                            group: groups[0]._id//phòng kinh doanh
                        },
                        
                    ]
                },
                {
                    name: "Mẫu CV3 Phòng Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban Kinh Doanh",
                    action: [
                        {
                            role: roles[0]._id,//trưởng phòng
                            group: groups[0]._id //phòng kinh doanh
                        },
                        {
                            role: roles[1]._id,//phó phòng
                            group: groups[0]._id//phòng kinh doanh
                        },
                        {
                            role: roles[2]._id,//nhân viên
                            group: groups[0]._id//phòng kinh doanh
                        },
                        
                    ]
                },
                {
                    name: "Mẫu CV4 Phòng Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban Kinh Doanh",
                    action: [
                        {
                            role: roles[0]._id,//trưởng phòng
                            group: groups[0]._id//phòng kinh doanh
                        },
                        {
                            role: roles[1]._id,//phó phòng
                            group: groups[0]._id//phòng kinh doanh
                        },
                        {
                            role: roles[2]._id,//nhân viên
                            group: groups[0]._id//phòng kinh doanh
                        },
                        
                    ]
                },
                {
                    name: "Mẫu CV5 Phòng Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban Kinh Doanh",
                    action: [
                        {
                            role: roles[0]._id,//trưởng phòng
                            group: groups[0]._id //phòng kinh doanh
                        },
                        {
                            role: roles[1]._id,//phó phòng
                            group: groups[0]._id//phòng kinh doanh
                        },
                        {
                            role: roles[2]._id,//nhân viên
                            group: groups[0]._id//phòng kinh doanh
                        },
                        
                    ]
                },
                {
                    name: "Mẫu CV6 Phòng Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban Kinh Doanh",
                    action: [
                        {
                            role: roles[0]._id,//trưởng phòng
                            group: groups[0]._id //phòng kinh doanh
                        },
                        {
                            role: roles[1]._id,//phó phòng
                            group: groups[0]._id//phòng kinh doanh
                        }
                        
                    ]
                },
                {
                    name: "Mẫu CV7 Phòng Kinh Doanh",
                    creator: users[0]._id,
                    description: "Mẫu công việc cho bộ phận phòng ban Kinh Doanh",
                    action: [
                        {
                            role: roles[0]._id,//trưởng phòng
                            group: groups[0]._id //phòng kinh doanh
                        }
                        
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
});