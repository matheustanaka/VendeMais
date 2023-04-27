const User = require("../models/User");

const findOrCreateUserMiddleware = async (req, res, next) => {
  if (req.oidc.isAuthenticated()) {
    const authId = req.oidc.user.sub;
    const profile = {
      name: req.oidc.user.name,
      email: req.oidc.user.email,
    };

    try {
      let user = await User.findOne({ authId });

      if (!user) {
        user = new User({
          authId: authId,
          name: profile.name,
          email: profile.email,
        });

        await user.save();
      }

      req.session.user = user;
      next();
    } catch (err) {
      // Handle the error
      next(err);
    }
  } else {
    next();
  }
};

module.exports = findOrCreateUserMiddleware;
