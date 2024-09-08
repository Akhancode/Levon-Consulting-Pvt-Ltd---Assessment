const express = require("express");
const  settingsController = require("../controllers/settings.controller");
const { validateTokenMiddleware } = require("../middleware/authorization.middleware");

const router = express.Router();

router.get("/settings",validateTokenMiddleware, async (req, res, next) => {
    settingsController.getSettings(req,res,next)
});

module.exports = router;
