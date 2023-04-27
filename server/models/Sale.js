const mongoose = require("mongoose");
const salesItemSchema = require("./SaleItem");

const saleSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  items: [salesItemSchema],
  totalAmount: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
