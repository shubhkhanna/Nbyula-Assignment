const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;

// configure .env file
dotenv.config();

// Initialize the app
const app = express();

// API Security
app.use(helmet());

// log all API requests to the console
app.use(morgan("dev"));

// listen to port 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
