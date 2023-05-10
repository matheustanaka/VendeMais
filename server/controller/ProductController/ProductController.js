const ProductModel = require("../../models/Product");

const createProduct = async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(400)
      .json({ error: "It could not create a product", details: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error updating product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await ProductModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
};
