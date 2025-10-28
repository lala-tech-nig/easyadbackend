import mongoose from "mongoose";

const adRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    brand: { type: String, required: true },
    budget: { type: String, required: true },
    goal: { type: String, required: true },
    referral: { type: String },
    uniqueAdId: { type: String, unique: true },
    greetingMessage: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("AdRequest", adRequestSchema);
