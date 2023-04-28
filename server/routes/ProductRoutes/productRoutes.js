const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../../controller/ProductController/ProductController");

const router = express.Router();

// TO-DO: Needs to add requiresAuth() middleware on all routes.

// Create a new product.
router.post("/products", createProduct);

// Get all products of the logged-in user.
router.get("/products", getAllProduct);

// Update a product.
router.put("/products/:id", updateProduct);

// Delete a product.
router.delete("/products/:id", deleteProduct);

module.exports = router;
