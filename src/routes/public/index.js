const express = require("express");
const router = express();

// import user or public routes here
// const test = require("./test.route");
const testRoute = require("./test.route");
const eximDataRoute = require("./eximData.route");

//public routes
const middleEndpoint = process.env.SERVICE_END_POINT || ""

router.use("/api"+middleEndpoint,eximDataRoute);

module.exports = router;
