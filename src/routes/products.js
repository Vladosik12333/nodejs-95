const express = require("express");
const wrapper = require("../helpers/wrapper");
const controllers = require("../controllers/product");
const validation = require("../middlewares/validation");

const { createSchema } = require("../models/product");
const route = express.Router();

route.get("/", wrapper(controllers.getAll));

route.get("/:id", wrapper(controllers.getOne));

route.post("/", validation.body(createSchema), wrapper(controllers.create));

module.exports = route;
