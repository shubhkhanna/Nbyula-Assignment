const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const db = require("./config/db");
const PORT = process.env.PORT || 5000;

const { handleError, notFound } = require("./middlewares/errorMiddleware");

// configure .env file
dotenv.config();

// connect to database
db();

// Initialize the app
const app = express();

// API Security
app.use(helmet());

// log all API requests to the console
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/v1/api/auth", require("./routes/userRoutes"));
app.use("/v1/api/courses", require("./routes/courseRoutes"));

// Handle errors
app.use(handleError);
app.use(notFound);

// listen to port 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
