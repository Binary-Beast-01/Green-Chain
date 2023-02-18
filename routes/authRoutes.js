const express = require("express");

// route controller
const AuthController = require("../controller/authController");
const router = express.Router();

// authentication routes
router.get("/login", AuthController.Login)
router.get("/register", AuthController.Register)

router.post("/login", AuthController.PostLogin)
router.post("/register", AuthController.PostRegister)


module.exports = router;