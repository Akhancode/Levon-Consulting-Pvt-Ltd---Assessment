
exports.getSettings = async (req, res, next) => {
  try {
    // const productsResponse = await productService.createProduct(req.body);
    const productsResponse = {
      message: "protected Settings Response",
      authentication: "passed",
    };
    res.status(200).json(productsResponse);
  } catch (err) {
    next(err);
  }
};
