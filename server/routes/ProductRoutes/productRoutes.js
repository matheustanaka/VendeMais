const express = require("express");
const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../../controller/ProductController/ProductController");

const authMiddleware = require("../../middleware/authMiddleware");

const router = express.Router();

// Create a new product.
router.post("/products", authMiddleware, createProduct);

// Get all products of the logged-in user.
router.get("/products", authMiddleware, getAllProduct);

// Update a product.
router.put("/products/:id", authMiddleware, updateProduct);

// Delete a product.
router.delete("/products/:id", authMiddleware, deleteProduct);

module.exports = router;
