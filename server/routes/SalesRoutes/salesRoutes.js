const express = require("express");
const authMiddleware = require("../../middleware/authMiddleware");

const {
  createSale,
  getAllSales,
} = require("../../controller/SalesController/SalesController");

const router = express.Router();

router.post("/sales", authMiddleware, createSale);

router.get("/sales", authMiddleware, getAllSales);

module.exports = router;
