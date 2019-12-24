const express = require("express");
const router = express.Router();
const KPIPersonalController = require("../../controllers/KPIPersonalController");

// Tìm kiếm KPI nhân viên
router.get('/all-member/:role/:user/:status/:starttime/:endtime', KPIPersonalController.getKPIAllMember);

// get all kpi personal
router.get('/user/:id', KPIPersonalController.get);

// Lấy kpi cá nhân theo id
router.get('/:id', KPIPersonalController.getById);

// Lấy kpi cá nhân theo tháng
router.get('/member/:id/:time', KPIPersonalController.getByMonth);

// lấy kpi cá nhân hiện tại
router.get('/current/:id', KPIPersonalController.getByUser);

// Khởi tạo KPI cá nhân
router.post('/create', KPIPersonalController.create);

// edit kpi personal by id
router.put('/:id', KPIPersonalController.edit);

// edit status of personal by id
router.put('/status/:id/:status', KPIPersonalController.editStatusKPIPersonal);

// phê duyệt tất cả mục tiêu của kpi cá nhân
router.put('/approve/:id', KPIPersonalController.approveAllTarget);

// đánh giá mục tiêu của kpi cá nhân
router.put('/evaluate/:id', KPIPersonalController.evaluateTarget);

// delete kpi personal
router.delete('/:id', KPIPersonalController.delete);

// thêm mục tiêu cho kpi cá nhân
router.post('/create-target', KPIPersonalController.createTarget);

// chỉnh sửa trạng thái từng mục tiêu của kpi cá nhân
router.put('/status-target/:kpipersonal/:id/:status', KPIPersonalController.editTatusTarget);

// edit target of personal by id
router.put('/target/:id', KPIPersonalController.editTarget);

// delete target of personal
router.delete('/target/:kpipersonal/:id', KPIPersonalController.deleteTarget);

module.exports = router;