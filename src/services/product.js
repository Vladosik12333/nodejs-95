const repositories = require("../repositories/product")

const getAll = async () => {
    const products = await repositories.getAll();
    return products;
};

const create = async (productBody) => {
    const newProduct = await repositories.create(productBody);
    return newProduct;
}

module.exports = {
    getAll,
    create
}