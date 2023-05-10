const admin = require("../config/firebase");
const UserModel = require("../models/User");

module.exports = (req, res, next) => {
  const idToken = req.headers.authorization;
  if (!idToken) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then(async (decodedToken) => {
      // Find the user with the authId that matches the uid from the decoded token
      const user = await UserModel.findOne({ authId: decodedToken.uid });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Set req.user to the found user
      req.user = user;

      next();
    })
    .catch((error) => {
      console.error("Error while verifying Firebase ID token:", error);
      res.status(403).json({ message: "Unauthorized access" });
    });
};
