const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.get("/products", async (req, res, next) => {
    productController.getProducts(req, res, next);
});
router.get("/product/:id", async (req, res, next) => {
    productController.getProductById(req, res, next);
});
router.patch("/product/:id", async (req, res, next) => {
    productController.updateProductById(req, res, next);
});
router.delete("/product/:id", async (req, res, next) => {
    productController.deleteProductById(req, res, next);
});
router.post("/product", async (req, res, next) => {
    productController.createProduct(req, res, next);
});

module.exports = router;
