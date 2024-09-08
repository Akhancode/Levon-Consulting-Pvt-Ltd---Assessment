
const jwt = require("jsonwebtoken");
const { CustomError } = require("../utils/errors/error");
const SECRET_KEY = process.env.SECRET_KEY

exports.validateTokenMiddleware = async (req, res, next) => {
  
  try {
    console.log(
      "validating middleware - token .."
    )
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) throw  new CustomError("Access Token missing !")
  
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) throw err
      req.user = user;
      next();
    });
    
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

