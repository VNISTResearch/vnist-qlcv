const express = require("express");
const router = express.Router();

const LoginController = require("../../controllers/auth/LoginController");
const RegisterController = require("../../controllers/auth/RegisterController");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", RegisterController);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", LoginController);

module.exports = router;