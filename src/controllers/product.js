const { Product } = require("../models/product");

const getAll = async (req, res) => {
  const products = await Product.find();
  res.json({ products });
};

module.exports = { getAll };
