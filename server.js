const dotenv = require("dotenv");
const express = require("express");

// DOTENV PATH
dotenv.config({
  path: "./config/config.env",
});

// Connection DB
const connectDB = require("./config/db.js");
connectDB();

// Routes file
const dmlog = require("./routes/dmlog.js");
const app = express();
// Json parser
app.use(express.json());

app.use("/", dmlog);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.CONNECTED} ${process.env.PORT}`);
});
