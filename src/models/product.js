const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

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

const updateSchema = Joi.object({
  name: Joi.string().min(2),
  description: Joi.string(),
  price: Joi.number(),
  stock: Joi.number(),
  promotion: Joi.number(),
  popular: Joi.boolean(),
}).min(1);

const getAllQuerySchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  popular: Joi.boolean(),
});

const idSchema = Joi.object({ id: Joi.objectId().required() });

module.exports = {
  Product,
  createSchema,
  updateSchema,
  idSchema,
  getAllQuerySchema,
};
