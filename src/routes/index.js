const express = require("express");
const router = express();

const testRoute = require("./test.route");
const productRoute = require("./product.routes");

router.use("/api",testRoute,productRoute  );

module.exports = router;
