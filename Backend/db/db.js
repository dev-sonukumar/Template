// data base connection
const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Database connected successfully!"))
    .catch((err) => {
      console.error(`Error connecting to the database: ${err}`);
      process.exit(1);
    });
};

module.exports = connectToDB;
