import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

// Route to test connection
router.get("/test", (req, res) => {
  res.send("Contact route is working");
});

// POST : /api/contact
router.post("/", async (req, res) => {
  console.log("Received data:", req.body);
  const { name, email, message } = req.body;

  try {
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
