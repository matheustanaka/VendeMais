const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");
const authConfig = require("../../config/jwt.auth");
const session = require("express-session");
const sessionConfig = require("../../config/session");
const findOrCreateUserMiddleware = require("../../middleware/findOrCreateMiddleware");
const {
  signIn,
  signUp,
  logout,
  authenticated,
} = require("../../controller/UserController/UserController");

const router = express.Router();
router.use(auth(authConfig));
router.use(session(sessionConfig));

router.get("/", (req, res) => {
  res.send("<h1>Página Inicial</h1>");
});

router.get("/signin", signIn);

router.get("/signup", signUp);

router.get("/logout", logout);

router.get("/api/sales", requiresAuth(), (req, res) => {
  console.log(req.session);
  res.send(`Welcome, ${req.session.user.name}!`);
});

router.get("/api/authenticated", findOrCreateUserMiddleware, authenticated);

module.exports = router;
