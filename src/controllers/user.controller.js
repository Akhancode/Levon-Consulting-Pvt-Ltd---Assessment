const userService = require("../services/user.service");

exports.register = async (req, res, next) => {
  try {
    // const productsResponse = await productService.createProduct(req.body);
   const  response =  await userService.register(req)
   
   res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    // const productsResponse = await productService.createProduct(req.body);
    const  response =  await userService.login(req)

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
