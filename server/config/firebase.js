const admin = require("firebase-admin");

// Replace with your own serviceAccountKey.json file.
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sales-management-fd8a0.firebaseio.com",
});

module.exports = admin;
