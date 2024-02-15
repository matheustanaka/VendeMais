const { error } = require("console");
const mongoose = require("mongoose");

// Mongo url
// `mongodb+srv://admin:admin@cluster0.l4umjzd.mongodb.net/?retryWrites=true&w=majority`

const connectDatabase = async () => {
  await mongoose.set("strictQuery", false);

  await mongoose
    .connect(
      "mongodb://vendemais-mongodb-1:27017"
    )
    .then(() => console.log("We are connected to MongoDB"))
    .catch((error) =>
      console.log(`You are not connected to database ${error}`)
    );
};

module.exports = connectDatabase;
