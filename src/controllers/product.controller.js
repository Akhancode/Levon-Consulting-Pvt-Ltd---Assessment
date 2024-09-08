const productService = require("../services/product.service");

//MANAGE Plan - Plan TABLE

exports.getProducts = async (req, res, next) => {
  try {
    const productsResponse = await productService.getProducts(req);
    res.status(201).json(productsResponse);
  } catch (err) {
    next(err);
  }
};

