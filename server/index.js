const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// config imports
const connectDatabase = require("./config/mongoose.db");
// routes
const UserRouter = require("./routes/UserRoutes/userRoutes");
const ProductRouter = require("./routes/ProductRoutes/productRoutes");
const SalesRouter = require("./routes/SalesRoutes/salesRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(UserRouter);
app.use(ProductRouter);
app.use(SalesRouter);

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
