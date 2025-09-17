import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Express API is working!");
});

export default app;
