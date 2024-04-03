import express from "express";
import { Message } from "../models/Message.js";

const router = express.Router();

router.post("/send-message", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(201).send({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).send({ error: "Failed to send message" });
  }
});

export default router;
