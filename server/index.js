const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const { auth } = require("express-openid-connect");
const authConfig = require("./config/jwt.auth");
// config imports
const connectDatabase = require("./config/mongoose.db");
const sessionConfig = require("./config/session");
// routes
const UserRouter = require("./routes/UserRoutes/userRoutes");
const ProductRouter = require("./routes/ProductRoutes/productRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionConfig));

// Adding auth middleware here
app.use(auth(authConfig));

// Routes
app.use(UserRouter);
app.use(ProductRouter);

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
