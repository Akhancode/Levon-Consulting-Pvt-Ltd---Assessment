const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.get("/products", async (req, res, next) => {
    productController.getProducts(req, res, next);
});

module.exports = router;
