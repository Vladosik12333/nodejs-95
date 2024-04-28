const { Product } = require("../models/product");

const getAll = async (filters) => {
  const pipeline = [];

  if (typeof filters.name === "string")
    pipeline.push({ $match: { name: new RegExp(filters.name) } });

  if (typeof filters.popular === "boolean")
    pipeline.push({ $match: { popular: filters.popular } });

  const products =
    (await pipeline.length) > 0 ? Product.aggregate(pipeline) : Product.find();

  return products;
};

const create = async (body) => {
  const newProduct = await Product.create(body);
  return newProduct;
};

const getOne = async (id) => {
  const product = await Product.findById(id);
  return product;
};

const deleteOne = async (id) => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  return deletedProduct;
};

const updateOne = async (id, body) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedProduct;
};

module.exports = {
  getAll,
  create,
  getOne,
  deleteOne,
  updateOne,
};
