const app = require("./app");
const connectDatabase = require("./db/Database");
const cloudinary = require("cloudinary");

// Handling uncaught exceptions (e.g., undefined variables)
process.on("uncaughtException", (err) => {
  console.error(`Error: ${err.message}`);
  console.error("Shutting down the server due to an uncaught exception...");
  process.exit(1);
});

// Load configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env", // Ensure the .env file path is correct
  });
}

// Check if required environment variables are set
if (!process.env.PORT || !process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

// Connect to the database
connectDatabase();

// Configure Cloudinary
try {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  console.log("Cloudinary configured successfully.");
} catch (err) {
  console.error("Failed to configure Cloudinary:", err.message);
  process.exit(1);
}

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Promise Rejection: ${err.message}`);
  console.error("Shutting down the server due to an unhandled promise rejection...");

  server.close(() => {
    process.exit(1);
  });
});
