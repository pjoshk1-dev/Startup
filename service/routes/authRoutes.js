const express = require("express");
const router = express.Router();
const { register, login, logout, restricted } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/protected", restricted);

module.exports = router;
