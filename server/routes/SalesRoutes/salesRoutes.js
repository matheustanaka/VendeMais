const express = require("express");
const authMiddleware = require("../../middleware/authMiddleware");

const {
  createSale,
  getAllSales,
  getSaleById,
} = require("../../controller/SalesController/SalesController");

const router = express.Router();

router.post("/sales", authMiddleware, createSale);

router.get("/sales", authMiddleware, getAllSales);

router.get("/sales/:id", authMiddleware, getSaleById);

module.exports = router;
