import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Full name
    role: { type: String, required: true }, //like  Full Stack Developer
    profileImage: { type: String }, // Image URL/path
    homeImage: { type: String }, // Homepage URL
    about: { type: String, maxlength: 300 }, // About text
    resumeLink: { type: String }, // Resume download/view link
    socialLinks: {
      linkedin: { type: String },
      github: { type: String },
      twitter: { type: String },
      facebook: { type: String },
      instagram: { type: String },
      youtube: { type: String },
      leetcode: { type: String },
      codeforces: { type: String },
      codechef: { type: String },
      gfg: { type: String },
    },
    aboutDetails: {
      birthday: { type: String },
      phone: { type: String },
      age: { type: Number },
      webkitURL: { type: String },
      degree: { type: String },
      email: { type: String },
      city: { type: String },
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
