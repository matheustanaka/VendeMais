const express = require("express");
const findOrCreateUserMiddleware = require("../../middleware/findOrCreateMiddleware");
const {
  signIn,
  signUp,
  logout,
  authenticated,
} = require("../../controller/UserController/UserController");

const router = express.Router();

router.get("/", (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.send("<h1>Página Inicial</h1>");
  } else {
    res.send("<h1>Página Inicial (Not authenticated)</h1>");
  }
});

router.get("/signin", signIn);

router.get("/signup", signUp);

router.get("/logout", logout);
/*
router.get("/sales", (req, res) => {
  // console.log(req.session);
  // res.send(`Welcome, ${req.session.user.name}!`);
}); */

router.get("/api/authenticated", findOrCreateUserMiddleware, authenticated);

module.exports = router;
