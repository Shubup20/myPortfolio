import fs from "fs";
import util from "util";
import Profile from "../models/Profile.js";
import cloudinary from "../config/cloudinary.js";
import { validationResult } from "express-validator";

const unlinkFile = util.promisify(fs.unlink);

// GET profile
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// PUT update profile
export const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile(req.body);
    } else {
      Object.assign(profile, req.body);
    }
    const saved = await profile.save();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: "Error updating profile", error: error.message });
  }
};

// POST upload image (profile/home)
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const type = req.body.type || req.query.type; // "profile" | "home"
    if (!["profile", "home"].includes(type)) {
      await unlinkFile(req.file.path);
      return res.status(400).json({ message: "Invalid type. Use profile or home" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "portfolio",
    });

    await unlinkFile(req.file.path);

    let profile = await Profile.findOne();
    if (!profile) profile = new Profile({});

    if (type === "profile" && profile.profileImagePublicId) {
      await cloudinary.uploader.destroy(profile.profileImagePublicId);
    }
    if (type === "home" && profile.homeImagePublicId) {
      await cloudinary.uploader.destroy(profile.homeImagePublicId);
    }

    if (type === "profile") {
      profile.profileImage = result.secure_url;
      profile.profileImagePublicId = result.public_id;
    } else {
      profile.homeImage = result.secure_url;
      profile.homeImagePublicId = result.public_id;
    }

    await profile.save();

    res.json({ message: "Image uploaded", url: result.secure_url, type });
  } catch (error) {
    if (req.file && req.file.path) await unlinkFile(req.file.path);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

// DELETE image
export const deleteImage = async (req, res) => {
  try {
    const type = req.body.type || req.query.type;
    if (!["profile", "home"].includes(type)) {
      return res.status(400).json({ message: "Invalid type" });
    }

    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    const publicId =
      type === "profile" ? profile.profileImagePublicId : profile.homeImagePublicId;

    if (publicId) await cloudinary.uploader.destroy(publicId);

    if (type === "profile") {
      profile.profileImage = undefined;
      profile.profileImagePublicId = undefined;
    } else {
      profile.homeImage = undefined;
      profile.homeImagePublicId = undefined;
    }

    await profile.save();
    res.json({ message: `${type} image deleted` });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image", error: error.message });
  }
};

// PATCH social link
export const patchSocialLink = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { key, url } = req.body;
    const allowed = [
      "linkedin", "github", "twitter", "facebook", "instagram",
      "youtube", "leetcode", "codeforces", "codechef", "gfg",
    ];
    if (!allowed.includes(key)) return res.status(400).json({ message: "Invalid social key" });

    const profile = (await Profile.findOne()) || new Profile({});
    profile.socialLinks[key] = url;

    await profile.save();
    res.json({ message: "Social link updated", socialLinks: profile.socialLinks });
  } catch (error) {
    res.status(500).json({ message: "Error updating social link", error: error.message });
  }
};

// DELETE social link
export const deleteSocialLink = async (req, res) => {
  try {
    const { key } = req.body;
    if (!key) return res.status(400).json({ message: "Key required" });

    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    if (profile.socialLinks && profile.socialLinks[key]) {
      delete profile.socialLinks[key];
      await profile.save();
    }

    res.json({ message: "Social link removed", socialLinks: profile.socialLinks });
  } catch (error) {
    res.status(500).json({ message: "Error deleting social link", error: error.message });
  }
};