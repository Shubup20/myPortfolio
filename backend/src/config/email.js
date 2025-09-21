import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // use Gmail
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // App password (not normal Gmail password)
  },
});

export default transporter;
