const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const ProductModel = require("../../models/Product");

const router = express.Router();

// Create a new product
router.post("/products", requiresAuth(), async (req, res) => {
  try {
    const productData = {
      ...req.body,
      user: req.session.user._id,
    };

    const newProduct = new ProductModel(productData);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: "It could not create a product" });
  }
});

// Get all products of the logged-in user
router.get("/products", requiresAuth(), async (req, res) => {
  try {
    const userId = req.session.user._id;
    const products = await ProductModel.find({ user: userId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

// Update a product
router.put("/products/:id", requiresAuth(), async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.session.user._id;

    const updatedProduct = await ProductModel.findOneAndUpdate(
      { _id: productId, user: userId },
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error updating product" });
  }
});

// Delete a product
router.delete("/products/:id", requiresAuth(), async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.session.user._id;

    const deletedProduct = await ProductModel.findOneAndDelete({
      _id: productId,
      user: userId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
});

module.exports = router;
