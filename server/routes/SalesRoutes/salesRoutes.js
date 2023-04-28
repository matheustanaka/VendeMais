const express = require("express");
const { requiresAuth } = require("express-openid-connect");

const Sale = require("../../models/Sale");
const Product = require("../../models/Product");

const router = express.Router();

router.post("/sales", async (req, res) => {
  try {
    const { customer, items, user } = req.body;

    // Validate the items and get product details
    const itemPromises = items.map(async (item) => {
      const product = await Product.findById(item.product);
      if (!product) {
        throw new Error(`Product not found: ${item.product}`);
      }
      return { ...item, product };
    });

    const resolvedItems = await Promise.all(itemPromises);

    // Calculate the total amount
    const totalAmount = resolvedItems.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    const newSale = new Sale({
      customer,
      items: resolvedItems.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalAmount,
      user,
    });

    await newSale.save();

    res.status(201).json(newSale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/sales", async (req, res) => {
  try {
    const sales = await Sale.find().populate("items.product");
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch sales" });
  }
});

module.exports = router;
