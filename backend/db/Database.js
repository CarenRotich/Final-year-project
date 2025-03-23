const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {  // Changed from DB_URL2 to DB_URL
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err}`);
      // Optional: You might want to exit the process if database connection fails
      process.exit(1);
    });
};

module.exports = connectDatabase;
