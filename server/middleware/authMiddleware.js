const admin = require("../config/firebase");

module.exports = (req, res, next) => {
  const idToken = req.headers.authorization;
  if (!idToken) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error("Error while verifying Firebase ID token:", error);
      res.status(403).json({ message: "Unauthorized access" });
    });
};
