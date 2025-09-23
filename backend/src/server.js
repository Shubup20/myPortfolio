import "./config/env.js";  // load env first

import connectDB from "./config/db.js";
import app from "./app.js";

// Async IIFE for startup
(async () => {
  try {
    await connectDB();
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Startup Error:", error.message);
    process.exit(1);
  }
})();

