const repositories = require("../repositories/product");
const httpError = require("../helpers/httpError");

const getAll = async (query) => {
  const products = await repositories.getAll(query);
  return products;
};

const create = async (productBody) => {
  const newProduct = await repositories.create(productBody);
  return newProduct;
};

const getOne = async (productId) => {
  const product = await repositories.getOne(productId);
  if (!product) throw httpError(400, "Product not found");
  return product;
};

const deleteOne = async (productId) => {
  const deletedProduct = await repositories.deleteOne(productId);
  if (!deletedProduct) throw httpError(404, "Product not found");
  return deletedProduct;
};

const updateOne = async (productId, productBody) => {
  const updatedProduct = await repositories.updateOne(productId, productBody);
  if (!updatedProduct) throw httpError(404, "Product not found");
  return updatedProduct;
};

module.exports = {
  getAll,
  create,
  getOne,
  deleteOne,
  updateOne,
};
