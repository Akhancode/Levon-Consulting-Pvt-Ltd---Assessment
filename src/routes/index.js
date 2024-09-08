const express = require("express");
const router = express();

const testRoute = require("./test.route");
const productRoute = require("./product.routes");
const profileRoute = require("./profile.routes");
const settingsRoute = require("./settings.routes");
const { validateTokenMiddleware } = require("../middleware/authorization.middleware");

router.use("/api",validateTokenMiddleware,profileRoute);
router.use("/api",validateTokenMiddleware,settingsRoute);
router.use("/api",testRoute,productRoute);

module.exports = router;
