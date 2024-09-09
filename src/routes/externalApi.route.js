const express = require("express");
const  externalApiController = require("../controllers/externalApi.controller");

const router = express.Router();

router.get("/weather", async (req, res, next) => {
    externalApiController.fetchExternalApi(req,res,next)
});

module.exports = router;
