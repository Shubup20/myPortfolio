import express from "express";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// GET all projects
router.get("/", getProjects);

// POST new project
router.post("/", createProject);

// PUT update project
router.put("/:id", updateProject);

// DELETE project
router.delete("/:id", deleteProject);

export default router;
