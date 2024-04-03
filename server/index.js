const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require ("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");
app.use(cors());
require('./models/UserApplication');

app.use(express.json());


app.use(require('./routes/userApplication'));

mongoose.connect(mongoUrl);

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

mongoose.connection.on("error", () => {
  console.log("Not Connected to DB");
});

app.listen(PORT, () => {
  console.log("Server is ruuning on Port: " + PORT);
});

