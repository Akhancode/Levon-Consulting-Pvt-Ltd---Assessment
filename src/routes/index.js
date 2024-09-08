const express = require("express");
const router = express();

const testRoute = require("./test.route");
const productRoute = require("./product.routes");
const userRoute = require("./user.routes");
const profileRoute = require("./profile.routes");
const settingsRoute = require("./settings.routes");

router.use("/api",profileRoute);
router.use("/api",settingsRoute);
router.use("/api",testRoute,productRoute,userRoute);

module.exports = router;
