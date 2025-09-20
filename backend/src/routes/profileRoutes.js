import express from "express";
import { body } from "express-validator";

import {
  getProfile,
  updateProfile,
  uploadImage,
  deleteImage,
  patchSocialLink,
  deleteSocialLink,
} from "../controllers/profileController.js";

import limiter from "../middleware/limiter.js"; // ✅ use middleware
import upload from "../config/multer.js"; // ✅ use config

const profileRouter = express.Router();

// Routes

// Profile (GET + PUT on "/")
profileRouter.route("/").get(limiter, getProfile).put(limiter, updateProfile);

// Image upload & delete
profileRouter
  .route("/upload")
  .post(limiter, upload.single("image"), uploadImage)
  .delete("/upload", limiter, deleteImage);
// Social links (PATCH + DELETE on "/social")
profileRouter
  .route("/social")
  .patch(
    limiter,
    [body("key").isString(), body("url").isURL()],
    patchSocialLink
  )
  .delete(limiter, deleteSocialLink);

export default profileRouter;
