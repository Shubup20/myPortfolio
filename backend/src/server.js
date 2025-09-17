import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

// Async IIFE to handle startup
(async () => {
  try {
    // Load environment variables
    dotenv.config();

    // Connect Database (wait until connected)
    await connectDB();

    // Start Server only if DB connection succeeds
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup error:", error.message);
    process.exit(1); // Exit app if something goes wrong
  }
})();

