const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const {
  createSale,
  getAllSales,
} = require("../../controller/SalesController/SalesController");

const router = express.Router();

router.post("/sales", createSale);

router.get("/sales", getAllSales);

module.exports = router;
