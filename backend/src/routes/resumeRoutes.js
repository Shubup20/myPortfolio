// src/routes/resumeRoutes.js
import express from "express";
import {
  getResume,
  updateResume,
  addEducation,
  addCertification,
  deleteEducation,
  deleteCertification,
  updateResumeLink,
  deleteResumeLink,
} from "../controllers/resumeController.js";

import limiter from "../middleware/limiter.js";

const resumeRouter = express.Router();

// Resume main (GET + PUT)
resumeRouter.route("/").get(limiter, getResume).put(limiter, updateResume);

// Add education / certification
resumeRouter.patch("/education", limiter, addEducation);
resumeRouter.patch("/certification", limiter, addCertification);

// Delete education / certification by index
resumeRouter.delete("/education/:index", limiter, deleteEducation);
resumeRouter.delete("/certification/:index", limiter, deleteCertification);

// Resume link
resumeRouter.patch("/link", limiter, updateResumeLink);
resumeRouter.delete("/link", limiter, deleteResumeLink);

export default resumeRouter;
