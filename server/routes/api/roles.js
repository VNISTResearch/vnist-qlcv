const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth');

const RoleController = require("../../controllers/RoleController");

router.get('/', auth, RoleController.get);
router.get('/super-role', auth, RoleController.getSuperRole);
router.get('/admin', auth, RoleController.getAdmins);
router.get('/same-department/:id', auth, RoleController.getRoleSameDepartment);
router.get('/role-info/:id', auth, RoleController.getRoleById); //id của role đó ->  đưa ra thông tin về role đó
router.get('/:id', auth, RoleController.getRoleOfUser); //id của users
router.post('/admin/add', auth, RoleController.addAdmin); //id của users

module.exports = router;
