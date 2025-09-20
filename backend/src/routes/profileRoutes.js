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

import limiter from "../middleware/limiter.js";   // ✅ use middleware
import upload from "../config/multer.js";         // ✅ use config

const router = express.Router();

// Routes
router.get("/", limiter, getProfile);
router.put("/", limiter, updateProfile);

router.post("/upload", limiter, upload.single("image"), uploadImage);
router.delete("/image", limiter, deleteImage);

router.patch(
  "/social",
  limiter,
  [body("key").isString(), body("url").isURL()],
  patchSocialLink
);
router.delete("/social", limiter, deleteSocialLink);

export default router;
