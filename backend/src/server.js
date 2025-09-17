import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

// Async IIFE for startup
(async () => {
  try {
    // Load environment variables
    dotenv.config();

    // Connect Database (if fails, catch block will handle it)
    await connectDB();
    console.log("✅ MongoDB Connected");

    // Start Server only if DB succeeds
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Startup Error:", error.message);
    process.exit(1); // Exit the app on any startup error
  }
})();
