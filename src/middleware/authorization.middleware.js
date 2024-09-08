
const { CustomError } = require("../utils/errors/error");

exports.validateTokenMiddleware = async (req, res, next) => {
  
  try {
    console.log(
      "validating middleware - token .."
    )
    next();
  } catch (error) {
    console.log(error);
    return next(
      new CustomError(
        error.message || "Failed to validate the provided token",
        error.code || 500
      )
    );
  }
};

