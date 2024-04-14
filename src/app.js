const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { NODE_ENV } = require("./config")
const formatLogger = NODE_ENV === "dev" ? "dev" : "short";
const wrapper = require("./helpers/wrapper");
const httpError = require("./helpers/httpError")

app.use(morgan(formatLogger));
app.use(cors());
app.use(express.json());


app.get("/", wrapper((req, res) => {
  throw httpError(400, "my Error")
  res.json({
    status: "200",
    message: "success",
  });
}));

app.use((req, res) => {
    res.status(404).json({
        status: 404,
        message: "Endpoint not found"
    })
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    status,
    message
  });
});

module.exports = app;