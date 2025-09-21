// src/routes/messageRoutes.js
import express from "express";
import { sendMessage, getMessages } from "../controllers/messageController.js";
import limiter from "../middleware/limiter.js";

const messageRouter = express.Router();

// POST new message + email
messageRouter.post("/", limiter, sendMessage);

// GET all messages (admin only - optional)
messageRouter.get("/", limiter, getMessages);

export default messageRouter;
