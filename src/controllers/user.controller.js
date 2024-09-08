const userService = require("../services/user.service");

exports.register = async (req, res, next) => {
  try {
    // const productsResponse = await productService.createProduct(req.body);
    const response = await userService.register(req);

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    // const productsResponse = await productService.createProduct(req.body);
    const response = await userService.login(req);

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    // const productsResponse = await productService.createProduct(req.body);
    const response = await userService.getAllUsers();
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const response = await userService.getUserByEmail(req.user.email);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
exports.getUserByEmail = async (req, res, next) => {
  try {
    const response = await userService.getUserByEmail(req.params.email);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
exports.updateUserByEmail = async (req, res, next) => {
  try {
    const response = await userService.updateUserByEmail(req.params.email,req.body);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
exports.deleteUserByEmail = async (req, res, next) => {
  try {
    const response = await userService.deleteUserByEmail(req.params.email);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
