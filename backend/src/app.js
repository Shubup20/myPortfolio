import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/resume", resumeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Express API is working!");
});

export default app;
