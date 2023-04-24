const express = require("express");
const bodyParser = require("body-parser");
const connectDatabase = require("./config/mongoose.db");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
