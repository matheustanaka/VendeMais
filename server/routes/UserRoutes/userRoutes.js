const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");
const authConfig = require("../../config/jwt.auth");
const session = require("express-session");
const sessionConfig = require("../../config/session");
const findOrCreateUserMiddleware = require("../../middleware/findOrCreateMiddleware");

const router = express.Router();
router.use(auth(authConfig));
router.use(session(sessionConfig));

router.get("/", (req, res) => {
  res.send("<h1>Página Inicial</h1>");
});

router.get("/signin", (req, res) => {
  console.log("User attempting to sign in.");
  res.oidc.login({ returnTo: "/api/authenticated" });
});

router.get("/signup", (req, res) => {
  console.log("User attempting to sign up.");
  res.oidc.login({ returnTo: "/api/authenticated" });
});

router.get("/logout", (req, res) => {
  console.log(
    `User ${req.session.user.name} (${req.session.user.email}) is logging out.`
  );
  req.oidc.logout({ returnTo: "/" });
});

router.get("/api/sales", requiresAuth(), (req, res) => {
  console.log(req.session);
  res.send(`Welcome, ${req.session.user.name}!`);
});

router.get("/api/authenticated", findOrCreateUserMiddleware, (req, res) => {
  console.log(
    `User ${req.session.user.name} (${req.session.user.email}) has logged in.`
  );
  res.redirect("/api/sales");
});

module.exports = router;
