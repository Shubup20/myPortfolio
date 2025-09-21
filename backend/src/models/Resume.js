import mongoose from "mongoose";

const { Schema } = mongoose;

const educationSchema = new Schema({
  degree: { type: String, required: true },      // B.Tech, Diploma, etc.
  institution: { type: String, required: true }, // College/Institute name
  year: { type: String, required: true },        // Example: 2021 - 2024
  score: { type: String },                       // CGPA / Percentage
});

const certificationSchema = new Schema({
  title: { type: String, required: true },       // e.g., Full-Stack Web Development
  year: { type: Number, required: true },        // e.g., 2023
  platform: { type: String },                    // e.g., Udemy, Coursera
});

const resumeSchema = new Schema(
  {
    summary: { type: String, required: true }, // Short summary
     resumeLink: { type: String },            // Resume download/Google drive link
    education: [educationSchema],             // Array of education objects
    certifications: [certificationSchema],    // Array of certifications
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
