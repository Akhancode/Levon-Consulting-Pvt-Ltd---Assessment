const express = require("express");
const  profileController = require("../controllers/profile.controller");
const { validateTokenMiddleware } = require("../middleware/authorization.middleware");

const router = express.Router();

router.get("/profile",validateTokenMiddleware, async (req, res, next) => {
    profileController.getProfile(req,res,next)
});

module.exports = router;
