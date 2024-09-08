const express = require("express");
const  settingsController = require("../controllers/settings.controller");

const router = express.Router();

router.get("/settings", async (req, res, next) => {
    settingsController.getSettings(req,res,next)
});

module.exports = router;
