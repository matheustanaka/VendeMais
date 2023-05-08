const express = require("express");
const userController = require("../../controller/UserController/UserController");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", authMiddleware, userController.logout);

module.exports = router;
