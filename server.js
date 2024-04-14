const app = require("./src/app");
const { PORT, MONGODB_URI } = require("./src/config");
const mongoose = require("mongoose");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database is connected");
    app.listen(PORT, (error) => {
      if (error) {
        console.log(`Error >>>>>> ${error}`);
        process.exit(1);
      }
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database error>>>", error);
    process.exit(1);
  });
