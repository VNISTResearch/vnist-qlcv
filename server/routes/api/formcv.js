const express = require("express");
const router = express.Router();

const FormCVController = require("../../controllers/FormCVController");

router.get('/', FormCVController.getAllForm);
router.get('/:idUser', FormCVController.getFormByIdUser);

module.exports = router;