require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const publicRoutes = require("./src/routes/index.js");
// import swagger ui
const swaggerui = require("swagger-ui-express");
const YAML = require("yamljs");
const bodyParser = require("body-parser");
const initializeRedisClient = require("./src/utils/redis/redis.js");
const { monitor_api } = require("./src/middleware/monitor-api.js");


const PORT = process.env.PORT;

//connect mongo
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;
// exporting for this.transaction
module.exports = database;

database.on("error", (error) => {
  console.error(error);
});

database.once("connected", () => {
  console.log("Connected to MongoDB");
});

const app = express();


// Use cors for all routes
app.use(cors());

app.use(bodyParser.json());


// SWAGGER MIDDLEWARE FOR DOCUMENTATION
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));
app.use(monitor_api)

//middlwares
// app.use(validateTokenMiddleware);
// app.use(monitor_api)

//routes
app.use("/", publicRoutes); //publicRoute

// global error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || err.code || 500;
  console.error({ message: err.message || err, code: statusCode });
  res.status(statusCode).json({ message: err.message });
  return;
});


module.exports = app;
// (async () => {
//   try {
//      await initializeRedisClient();
//     app.listen(PORT, () => {
//       console.log(`Server started at PORT: ${PORT}`);
//     });
//   } catch (err) {
//     console.error("Failed to initialize Redis client", err);
//     process.exit(1); // Exit the process with failure
//   }
// })();
