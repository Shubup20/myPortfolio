import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: { type: String, required: true }, // Project name
    description: { type: String, required: true }, // Small summary
    category: { type: String, enum: ["App", "Web"], required: true },
    image: { type: String }, // Image URL/path
    techStack: [String], // Array of techs
    github: { type: String }, // GitHub link
    liveDemo: { type: String }, // Live demo link
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
