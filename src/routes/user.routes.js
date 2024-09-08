const express = require("express");
const  userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", async (req, res, next) => {
    userController.register(req,res,next)
});
router.post("/login", async (req, res, next) => {
    userController.login(req,res,next)
});

module.exports = router;
