const express = require("express");
const  profileController = require("../controllers/profile.controller");

const router = express.Router();

router.get("/profile", async (req, res, next) => {
    profileController.getProfile(req,res,next)
});

module.exports = router;
