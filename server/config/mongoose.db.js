const { error } = require("console");
const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose.set("strictQuery", false);

  await mongoose
    .connect(
      `mongodb+srv://admin:admin@cluster0.l4umjzd.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log("We are connected to MongoDB"))
    .catch((error) =>
      console.log(`You are not connected to database ${error}`)
    );
};

module.exports = connectDatabase;
