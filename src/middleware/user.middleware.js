
const { CustomError } = require("../utils/errors/error");
const { getUserByAuthId } = require("../utils/sqlQueries");

exports.validateTokenMiddleware = async (req, res, next) => {
  
  try {
  
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

