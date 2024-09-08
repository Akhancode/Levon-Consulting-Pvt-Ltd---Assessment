const productsData = require("../utils/data/products.json");
const {
  DatabaseError,
  ValidationError,
  NotFoundError,
} = require("../utils/errors/error");

const fs = require("fs");
const path = require("path");
const { readJson, writeJson } = require("../utils/helper/helperFunction");

const productsFilePath = path.join(__dirname, "../utils/data/products.json");

exports.createProduct = async (productData) => {
  if (!productData.name) {
    throw new ValidationError("Product Name is required.");
  }
  if (!productData.price) {
    throw new ValidationError("Product price is required.");
  }

  try {
    const productsData = readJson(productsFilePath);
    productsData.push(productData);
    writeJson(productsData, productsFilePath);
    return {
      message: `created new product `,
      success: true,
    };
  } catch (error) {
    if (error instanceof NotFoundError || error instanceof ValidationError) {
      throw error; 
    } else {
      throw new DatabaseError("Error creating user.");
    }
  }
};

exports.getProducts = async () => {
  try {
    const productsData = readJson(productsFilePath);
    return productsData;
  } catch (error) {
    throw new DatabaseError("Error fetching products.");
  }
};
exports.getProductById = async (_productId) => {
  try {
    const productId = Number(_productId);
    const productsData = readJson(productsFilePath);
    var foundIndex = productsData.findIndex(
      (product) => product.id == productId
    );
    const resultData = productsData[foundIndex];
    if (!resultData) {
      throw new NotFoundError("No product found by this id");
    }
    return resultData;
  } catch (error) {
    if (error instanceof NotFoundError) {
      throw error;
    } else {
      throw new DatabaseError("Error fetching products.");
    }
  }
};
exports.updateProductById = async (_productId, updateData) => {
  try {
    const productId = Number(_productId);
    const productsData = readJson(productsFilePath);
    var foundIndex = productsData.findIndex(
      (product) => product.id == productId
    );
    const resultData = productsData[foundIndex];

    if (!resultData) {
      throw new NotFoundError("No product found by this id");
    }
    let updatedProductDetails = { ...resultData, ...updateData };
    productsData[foundIndex] = updatedProductDetails;
    writeJson(productsData, productsFilePath);

    return updatedProductDetails;
  } catch (error) {
    if (error instanceof NotFoundError || error instanceof ValidationError) {
        throw error; 
      } else {
          throw new DatabaseError("Error updating  product.");
    }
  }
};
exports.deleteProductById = async (_productId) => {
  try {
    const productId = Number(_productId);
    const productsData = readJson(productsFilePath);
    var foundIndex = productsData.findIndex(
      (product) => product.id == productId
    );
    const resultData = productsData[foundIndex];
    if (!resultData) {
      throw new NotFoundError("No product found by this id / already deleted");
    }

    productsData.splice(foundIndex, 1);
    writeJson(productsData, productsFilePath);

    return {
      message: "Deleted Successfully . ",
    };
  } catch (error) {
    if (error instanceof NotFoundError || error instanceof ValidationError) {
        throw error; 
      } else {
        throw new DatabaseError("Error updating  product.");
      }
  }
};
