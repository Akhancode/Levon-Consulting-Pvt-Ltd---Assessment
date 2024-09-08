const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const { CustomError, DatabaseError, NotFoundError, ValidationError } = require("../utils/errors/error");
const { default: mongoose } = require("mongoose");

const SECRET_KEY = process.env.SECRET_KEY
exports.getAllUsers = async () => {
  try {
    const userData = await User.find().select('-password');
    return userData;
  } catch (error) {
    throw new DatabaseError("Error fetching users.");
  }
};
exports.getUserByEmail = async (email) => {
  try {
    const userData = await User.findOne({email}).select('-password');
    return userData;
  } catch (error) {
    throw new DatabaseError("Error fetching users.");
  }
};
exports.updateUserByEmail = async (email,updateData) => {
  try {
    const userData = await User.findOneAndUpdate({email},updateData).select('-password');
    return userData;
  } catch (error) {
    throw new DatabaseError("Error fetching users.");
  }
};
exports.deleteUserByEmail = async (email) => {
  try {
    const userData = await User.findOneAndDelete({email}).select('-password');
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
    const token = jwt.sign({ email ,userId:user._id}, SECRET_KEY, { expiresIn: '1h' });
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
