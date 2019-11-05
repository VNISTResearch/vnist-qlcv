const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware/auth");

const AuthController = require("../../controllers/AuthController");
const UserController = require("../../controllers/UserController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.get("/", auth, UserController.get);
router.get("/:id", UserController.getById);
router.get("/same-department/:id", UserController.getUsersSameDepartment);

router.post("/create", UserController.create);
router.post("/create-job-title", UserController.createJobTitle);
router.patch("/:id", UserController.edit);
router.delete("/:id", UserController.delete);

module.exports = router;