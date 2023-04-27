require("dotenv").config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.JWT_SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

module.exports = config;
