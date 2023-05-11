const ProductModel = require("../../models/Product");

const createProduct = async (req, res) => {
  try {
    const userId = req.user._id;
    const newProduct = new ProductModel({ ...req.body, user: userId });

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
    const userId = req.user._id;
    const products = await ProductModel.find({ user: userId });
    res.status(200).json(products);
  } catch (error) {
    console.error(error); // Log the error to your server logs
    res.status(500).json({ error: error.message }); // Send the error message in the HTTP response
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
