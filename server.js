const app = require("./src/app");
const { PORT } = require("./src/config");

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error >>>>>> ${error}`);
    process.exit(1);
  }
  console.log(`Server is running on port: ${PORT}`);
});
