const express = require("express");

const route = express.Router();

route.get("/", (rec, res) => {
    res.json("route")
})
module.exports = route;