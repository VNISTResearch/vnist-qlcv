const express = require("express");
const router = express.Router();
const {auth} = require('../../middleware/auth'); //kiểm tra đã đăng nhập hay chưa

const AuthController = require("../../controllers/AuthController");
const UserController = require("../../controllers/UserController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.get("/", auth, UserController.get);
router.get("/:id", auth, UserController.getById);
router.post("/create", UserController.create);
router.post("/create-job-title", auth, UserController.createJobTitle);
router.patch("/:id", auth, UserController.edit);
router.delete("/:id", auth, UserController.delete);

module.exports = router;