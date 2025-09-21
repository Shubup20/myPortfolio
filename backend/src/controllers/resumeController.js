// src/controllers/resumeController.js
import Resume from "../models/Resume.js";

// GET resume (only one, like profile)
export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// PUT update or create resume
export const updateResume = async (req, res) => {
  try {
    let resume = await Resume.findOne();
    if (!resume) {
      resume = new Resume(req.body);
    } else {
      Object.assign(resume, req.body);
    }
    const saved = await resume.save();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: "Error updating resume", error: error.message });
  }
};

// PATCH add education
export const addEducation = async (req, res) => {
  try {
    const resume = (await Resume.findOne()) || new Resume({});
    resume.education.push(req.body);
    await resume.save();
    res.json(resume.education);
  } catch (error) {
    res.status(400).json({ message: "Error adding education", error: error.message });
  }
};

// PATCH add certification
export const addCertification = async (req, res) => {
  try {
    const resume = (await Resume.findOne()) || new Resume({});
    resume.certifications.push(req.body);
    await resume.save();
    res.json(resume.certifications);
  } catch (error) {
    res.status(400).json({ message: "Error adding certification", error: error.message });
  }
};

// DELETE education by index
export const deleteEducation = async (req, res) => {
  try {
    const { index } = req.params; // index in array
    const resume = await Resume.findOne();
    if (!resume) return res.status(404).json({ message: "Resume not found" });

    if (index < 0 || index >= resume.education.length) {
      return res.status(400).json({ message: "Invalid education index" });
    }

    resume.education.splice(index, 1); // remove entry
    await resume.save();
    res.json({ message: "Education deleted", education: resume.education });
  } catch (error) {
    res.status(500).json({ message: "Error deleting education", error: error.message });
  }
};

// DELETE certification by index
export const deleteCertification = async (req, res) => {
  try {
    const { index } = req.params; // index in array
    const resume = await Resume.findOne();
    if (!resume) return res.status(404).json({ message: "Resume not found" });

    if (index < 0 || index >= resume.certifications.length) {
      return res.status(400).json({ message: "Invalid certification index" });
    }

    resume.certifications.splice(index, 1); // remove entry
    await resume.save();
    res.json({ message: "Certification deleted", certifications: resume.certifications });
  } catch (error) {
    res.status(500).json({ message: "Error deleting certification", error: error.message });
  }
};


// PATCH update resume link
export const updateResumeLink = async (req, res) => {
  try {
    const { resumeLink } = req.body;
    if (!resumeLink) {
      return res.status(400).json({ message: "Resume link is required" });
    }

    let resume = await Resume.findOne();
    if (!resume) {
      resume = new Resume({ resumeLink });
    } else {
      resume.resumeLink = resumeLink;
    }

    await resume.save();
    res.json({ message: "Resume link updated", resumeLink: resume.resumeLink });
  } catch (error) {
    res.status(500).json({ message: "Error updating resume link", error: error.message });
  }
};

// DELETE resume link
export const deleteResumeLink = async (req, res) => {
  try {
    const resume = await Resume.findOne();
    if (!resume) return res.status(404).json({ message: "Resume not found" });

    resume.resumeLink = undefined;
    await resume.save();

    res.json({ message: "Resume link deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting resume link", error: error.message });
  }
};