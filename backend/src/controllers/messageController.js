import Message from "../models/Message.js";
import transporter from "../config/email.js";

// POST: send and save message
export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    // Send email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // your Gmail
      subject: `New Message from ${name}: ${subject}`,
      text: message,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ message: "Message sent successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error: error.message });
  }
};

// GET: fetch all messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error: error.message });
  }
};
