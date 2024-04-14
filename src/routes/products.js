const express = require("express");
const wrapper = require("../helpers/wrapper");
const controllers = require("../controllers/product");
const route = express.Router();

route.get("/", wrapper(controllers.getAll));
module.exports = route;
