const { Product } = require("../models/product");

const getAll = async (req, res) => {
  const products = await Product.find();
  res.json({ products });
};

const create = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json({ newProduct });
};
module.exports = { getAll, create };
