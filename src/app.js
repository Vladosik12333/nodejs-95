const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { NODE_ENV } = require("./config");
const route = require("./routes/products");

const app = express();
const formatLogger = NODE_ENV === "dev" ? "dev" : "short";

app.use(morgan(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/api/products", route)


app.use((_, res) => {
  res.status(404).json({
    status: 404,
    message: "Endpoint not found"
  })
})

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    status,
    message
  });
});

module.exports = app;