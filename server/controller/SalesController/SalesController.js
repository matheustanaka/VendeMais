const Sale = require("../../models/Sale");
const Product = require("../../models/Product");

const createSale = async (req, res) => {
  try {
    const userId = req.user._id;
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
      user: userId,
    });

    await newSale.save();

    res.status(201).json(newSale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllSales = async (req, res) => {
  try {
    const userId = req.user._id;
    const sales = await Sale.find({ user: userId }).populate("items.product");
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch sales" });
  }
};

module.exports = {
  createSale,
  getAllSales,
};
