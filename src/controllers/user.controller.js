
exports.register = async (req, res, next) => {
  try {
    // const productsResponse = await productService.createProduct(req.body);
    const productsResponse = {
      message: "register",
      authentication: "passed",
    };
    res.status(200).json(productsResponse);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    // const productsResponse = await productService.createProduct(req.body);
    const productsResponse = {
      message: "login",
      authentication: "passed",
    };
    res.status(200).json(productsResponse);
  } catch (err) {
    next(err);
  }
};
