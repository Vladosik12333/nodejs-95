require("dotenv").config();

const { PORT = 3000, NODE_ENV = "", MONGODB_URI="" } = process.env;

module.exports = {
    PORT,
    NODE_ENV,
    MONGODB_URI
}