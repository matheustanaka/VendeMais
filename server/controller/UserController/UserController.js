const signIn = async (req, res) => {
  try {
    console.log("User attempting to sign in.");
    res.oidc.login({ returnTo: "/api/authenticated" });
  } catch (error) {
    console.log(error);
  }
};

const signUp = async (req, res) => {
  try {
    console.log("User attempting to sign up.");
    res.oidc.login({ returnTo: "/api/authenticated" });
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  try {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          console.log("An error occurred while destroying the session");
        } else {
          console.log("Session destroyed");
        }
      });
    }
    console.log(
      `User ${req.session.user.name} (${req.session.user.email}) is logging out.`
    );
    req.oidc.logout({ returnTo: "/" });
  } catch (error) {
    console.log(error);
  }
};

const authenticated = async (req, res) => {
  try {
    /*
    console.log(
      `User ${req.session.user.name} (${req.session.user.email}) has logged in.`
    ); */
    res.redirect("/sales");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signIn,
  signUp,
  logout,
  authenticated,
};
