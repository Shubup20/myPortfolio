import express from "express";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const projectRouter = express.Router();

// GET all projects
projectRouter.route("/").get(getProjects).post(createProject);

// PUT update project && DELETE project
projectRouter
  .route("/:id")
  .router.put("/:id", updateProject)
  .delete("/:id", deleteProject);

export default projectRouter;
