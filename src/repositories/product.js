const { Product } = require("../models/product");

const getAll = async (filter) => {
    const products = await Product.find();
    return products
};

const create = async (body) => {
    const newProduct = await Product.create(req.body);
    return newProduct
};

module.exports = {
    getAll,
    create
}