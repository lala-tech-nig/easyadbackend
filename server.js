// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import adRoutes from "./routes/adRoutes.js";

// dotenv.config();
// const app = express();

// // ✅ CORS configuration
// const allowedOrigins = [
//   "https://www.easyad.com.ng",
//   "https://easyad.com.ng",
//   "http://localhost:3000", // keep this for local testing
//   "https://easyaddashboard.vercel.app/",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// // ✅ Handle preflight OPTIONS requests
// app.options("*", cors());

// // Middleware
// app.use(express.json());

// // Routes
// app.use("/api/ad-request", adRoutes);

// // Test route
// app.get("/", (req, res) => {
//   res.send("🚀 EasyAd backend is running successfully!");
// });

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




import express from "express"; 
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import adRoutes from "./routes/adRoutes.js";

dotenv.config();
const app = express();

// ✅ Allow all origins (completely open CORS)
app.use(
  cors({
    origin: "*", // allows any origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle preflight OPTIONS requests
app.options("*", cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/ad-request", adRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 EasyAd backend is running successfully!");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
