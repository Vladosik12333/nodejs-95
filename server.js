const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
const formatLogger = process.env.NODE_ENV === "dev" ? "dev" : "short";

app.use(morgan(formatLogger));
app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    status: "200",
    message: "success",
  });
});

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(`Error >>>>>> ${error}`);
    process.exit(1);
  }
  console.log(`Server is running on port: ${process.env.PORT}`);
});
