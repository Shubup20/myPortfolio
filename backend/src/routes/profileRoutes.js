import express from "express";
import multer from "multer";
import rateLimit from "express-rate-limit";
import { body } from "express-validator";

import {
  getProfile,
  updateProfile,
  uploadImage,
  deleteImage,
  patchSocialLink,
  deleteSocialLink,
} from "../controllers/profileController.js";

const router = express.Router();

// Rate limiter
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

// Multer config
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp/;
    if (allowed.test(file.mimetype)) cb(null, true);
    else cb(new Error("Only images allowed (jpeg, jpg, png, webp)"));
  },
});

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
