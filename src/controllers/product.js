const services = require("../services/product");

const getAll = async (req, res) => {
  const products = await services.getAll(req.query);
  res.json({ products });
  console.log(req.query);
};

const getOne = async (req, res) => {
  const product = await services.getOne(req.params.id);
  res.json({ product });
};

const create = async (req, res) => {
  const newProduct = await services.create(req.body);
  res.json({ newProduct });
};

const deleteOne = async (req, res) => {
  const deletedProduct = await services.deleteOne(req.params.id);
  res.json({ deletedProduct });
};

const updateOne = async (req, res) => {
  const updatedProduct = await services.updateOne(req.params.id, req.body);
  res.json({ updatedProduct });
};

module.exports = { getAll, create, getOne, deleteOne, updateOne };
