const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: null },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  promotion: { type: Number, default: 0 },
  popular: { type: Boolean, default: false },
});

const Product = model("product", productSchema);

module.exports = { Product };
