const dotenv = require("dotenv");
const express = require("express");

// Load DOTENV PATH
dotenv.config({
  path: "./config/config.env",
});

// Connection DB
const connectDB = require("./config/db.js");
connectDB();

// Routes file
const dmlog = require("./routes/dmlog.js");
const app = express();
app.use("/", dmlog);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(PORT);
});
