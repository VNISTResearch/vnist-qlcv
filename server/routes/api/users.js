const express = require("express");
const router = express.Router();

const AuthController = require("../../controllers/AuthController");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", AuthController.register);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", AuthController.login);

module.exports = router;