const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { NODE_ENV } = require("./config")
const formatLogger = NODE_ENV === "dev" ? "dev" : "short";

app.use(morgan(formatLogger));
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    status: "200",
    message: "success",
  });
});

app.use((req, res) => {
    res.status(404).json({
        status: 404,
        message: "Endpoint not found"
    })
})

module.exports = app;