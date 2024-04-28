const services = require("../services/product")

const getAll = async (req, res) => {
  const products = await services.getAll();
  res.json({ products });
};

const getOne = async (req, res) => {
  const product = await services.getOne(req.params.id);
  res.json({ product });

}

const create = async (req, res) => {
  const newProduct = await services.create(req.body);
  res.json({ newProduct });
};

module.exports = { getAll, create, getOne };
