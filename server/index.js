const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// config imports
const connectDatabase = require("./config/mongoose.db");
// routes
const UserRouter = require("./routes/UserRoutes/userRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(UserRouter);

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
