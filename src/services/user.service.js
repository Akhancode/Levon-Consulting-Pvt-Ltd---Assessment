const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const { CustomError, DatabaseError, NotFoundError, ValidationError } = require("../utils/errors/error");

const SECRET_KEY = process.env.SECRET_KEY
exports.getUsers = async () => {
  try {
    const userData = await User.find();
    return userData;
  } catch (error) {
    throw new DatabaseError("Error fetching users.");
  }
};
exports.register = async (req) => {
  try {
    const { email,userName, password } = req.body;
    if(!email || !password){
      throw new CustomError("Mandatory fields are empty.")
    }
    const user = new User({ email, password ,userName});
    await user.save();
    return {
      message: "user registered successfully"
    }
  } catch (error) {
    if (error instanceof NotFoundError || error instanceof ValidationError || error instanceof CustomError) {
      throw error; 
    } else {
      throw new DatabaseError(`Error registering user. : ${error.message||""}`);
    }
  }
};
exports.login = async (req) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
      throw new CustomError("Mandatory fields are empty.")
    }
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new CustomError("Invalid credentials")
    }
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    return {
      message: "user loggedin successfully",
      token

    }
  } catch (error) {
    if (error instanceof NotFoundError || error instanceof ValidationError || error instanceof CustomError) {
      throw error; 
    } else {
      throw new DatabaseError("Error Logging in  user.");
    }
  }
};
