const services = require("../services/product")

const getAll = async (req, res) => {
  const products = await services.getAll();
  res.json({ products });
};

const create = async (req, res) => {
  const newProduct = await services.create(req.body);
  res.json({ newProduct });
};

module.exports = { getAll, create };
