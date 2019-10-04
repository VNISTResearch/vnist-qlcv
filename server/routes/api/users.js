const express = require("express");
const router = express.Router();

const AuthController = require("../../controllers/AuthController");
const UserController = require("../../controllers/UserController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.get("/", UserController.get);
router.get("/:id", UserController.getById);
router.post("/create", UserController.create);
router.post("/create-job-title", UserController.createJobTitle);
router.patch("/:id", UserController.edit);
router.delete("/:id", UserController.delete);

module.exports = router;