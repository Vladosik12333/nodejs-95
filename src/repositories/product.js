const { Product } = require("../models/product");

const getAll = async (query) => {
  const filters = {};

  for (const keyParametr in query) {
    const valueParametr = query[keyParametr];
    filters[keyParametr] = { $regex: valueParametr, $options: "i" };
  }

  const products = await Product.find(filters);

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
