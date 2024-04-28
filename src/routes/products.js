const express = require("express");
const wrapper = require("../helpers/wrapper");
const controllers = require("../controllers/product");
const validation = require("../middlewares/validation");

const {
  createSchema,
  updateSchema,
  idSchema,
  getAllQuerySchema,
} = require("../models/product");
const route = express.Router();

route.get(
  "/",
  validation.query(getAllQuerySchema),
  wrapper(controllers.getAll)
);

route.get("/:id", validation.params(idSchema), wrapper(controllers.getOne));

route.post("/", validation.body(createSchema), wrapper(controllers.create));

route.delete(
  "/:id",
  validation.params(idSchema),
  wrapper(controllers.deleteOne)
);

route.put(
  "/:id",
  validation.params(idSchema),
  validation.body(updateSchema),
  wrapper(controllers.updateOne)
);

module.exports = route;
