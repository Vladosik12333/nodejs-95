const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: null },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  promotion: { type: Number, default: 0 },
  popular: { type: Boolean, default: false },
});

const Product = model("product", productSchema);

const createSchema = Joi.object({
  name: Joi.string().min(2).required(),
  description: Joi.string(),
  price: Joi.number().required(),
  stock: Joi.number(),
  promotion: Joi.number(),
  popular: Joi.boolean(),
});

module.exports = { Product, createSchema };
