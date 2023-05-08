const User = require("../../models/User");
const admin = require("../../config/firebase");

const userController = {
  register: async (req, res) => {
    try {
      const { authId, name, email } = req.body;
      if (!authId || !name || !email) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const existingUser = await User.findOne({ authId });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = new User({ authId, name, email });
      await newUser.save();

      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error("Error in user registration:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  },

  login: async (req, res) => {
    try {
      const idToken = req.headers.authorization;
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      const { uid, name, email } = decodedToken;

      let user = await User.findOne({ authId: uid });
      if (!user) {
        // Register the user if they don't exist
        user = new User({ authId: uid, name, email });
        await user.save();
      }

      res.status(200).json({ message: "User logged in successfully", user });
    } catch (error) {
      console.error("Error in user login:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  },

  logout: (req, res) => {
    res.status(200).json({ message: "User logged out successfully" });
  },
};

module.exports = userController;
