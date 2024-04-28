const repositories = require("../repositories/product");
const httpError = require("../helpers/httpError");

const getAll = async () => {
    const products = await repositories.getAll();
    return products;
};

const create = async (productBody) => {
    const newProduct = await repositories.create(productBody);
    return newProduct;
}

const getOne = async (productId) => {
    const product = await repositories.getOne(productId);
    if (!product) throw httpError(400, "Product not found")
    return product;
}

module.exports = {
    getAll,
    create,
    getOne
}

