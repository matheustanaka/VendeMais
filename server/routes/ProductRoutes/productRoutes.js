const express = require("express");
const {
  createProduct,
  getAllProduct,
  getProductbyId,
  updateProduct,
  deleteProduct,
} = require("../../controller/ProductController/ProductController");

const authMiddleware = require("../../middleware/authMiddleware");

const router = express.Router();

// Create a new product.
router.post("/products", authMiddleware, createProduct);

// Get all products
router.get("/products", authMiddleware, getAllProduct);

// Get product by Id
router.get("/products/:id", authMiddleware, getProductbyId);

// Update a product.
router.put("/products/:id", authMiddleware, updateProduct);

// Delete a product.
router.delete("/products/:id", authMiddleware, deleteProduct);

module.exports = router;
