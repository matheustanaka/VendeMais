const { error } = require("console");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


// Mongo url
// `mongodb+srv://admin:admin@cluster0.l4umjzd.mongodb.net/?retryWrites=true&w=majority`

const connectDatabase = async () => {
  await mongoose.set("strictQuery", false);

  await mongoose
    .connect(
        `${process.env.DATABASE_URL}`
    )
    .then(() => console.log("We are connected to MongoDB"))
    .catch((error) =>
      console.log(`You are not connected to database ${error}`)
    );
};

module.exports = connectDatabase;
