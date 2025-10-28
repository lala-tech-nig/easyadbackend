import express from "express";
import AdRequest from "../models/AdRequest.js";
import { generateEasyAdId } from "../utils/generateId.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, brand, budget, goal, referral } = req.body;

    // Generate tracking ID
    const uniqueAdId = generateEasyAdId();

    // Generate personalized message (not sent — just stored)
    const greetingMessage = `
👋 Hello ${name || "there"},

Welcome to *EasyAd* — your smart partner for digital advertisement success!

I’m *Olaniyan Shamsudeen Yinka*, CEO of EasyAd. We’re thrilled to have you onboard and can’t wait to help your business grow.

Your unique Ad Tracking ID is: *${uniqueAdId}*

Would you prefer we communicate with you via:
1️⃣ WhatsApp  
2️⃣ Email  
3️⃣ SMS  

Please reply with your preferred option.
`;

    // Save data + message to MongoDB
    const newAd = new AdRequest({
      name,
      email,
      phone,
      brand,
      budget,
      goal,
      referral,
      uniqueAdId,
      greetingMessage,
    });

    await newAd.save();

    res.status(201).json({
      success: true,
      message: "Ad request received successfully.",
      data: newAd,
    });
  } catch (error) {
    console.error("❌ Error saving ad request:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process ad request.",
      error: error.message,
    });
  }
});

export default router;
