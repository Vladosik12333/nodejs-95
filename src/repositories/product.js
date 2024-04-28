const { Product } = require("../models/product");

const getAll = async (filter) => {
    const products = await Product.find(filter);
    return products
};

const create = async (body) => {
    const newProduct = await Product.create(body);
    return newProduct
};

const getOne = async (id) => {
    const product = await Product.findById(id);
    return product;
}

module.exports = {
    getAll,
    create,
    getOne
}