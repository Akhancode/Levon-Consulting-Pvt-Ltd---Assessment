const productService = require("../services/product.service");





exports.createProduct = async (req, res, next) => {
  try {
    const productsResponse = await productService.createProduct(req.body);
    res.status(200).json(productsResponse);
  } catch (err) {
    next(err);
  }
};
exports.getProducts = async (req, res, next) => {
  try {
    const productsResponse = await productService.getProducts(req);
    res.status(200).json(productsResponse);
  } catch (err) {
    next(err);
  }
};
exports.getProductById = async (req, res, next) => {
  try {
    const productsResponse = await productService.getProductById(req.params.id);
    res.status(200).json(productsResponse);
  } catch (err) {
    next(err);
  }
};
exports.updateProductById = async (req, res, next) => {
  try {
    const productsResponse = await productService.updateProductById(req.params.id,req.body);
    res.status(200).json(productsResponse);
  } catch (err) {
    next(err);
  }
};
exports.deleteProductById = async (req, res, next) => {
  try {
    const productsResponse = await productService.deleteProductById(req.params.id);
    res.status(200).json(productsResponse);
  } catch (err) {
    next(err);
  }
};

