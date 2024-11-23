require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const { sequelize } = require("sequelize");

const app = express();

// : middleware

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

const home = require("./routes/blogRoute");
app.use("/", home);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
