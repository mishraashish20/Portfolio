import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = await Message.create({
      name,
      email,
      message
    });

    res.status(201).json({
      success: true,
      data: newMessage
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};