const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public")); // serve UI

// Routes
const impactRoutes = require("./routes/impactRoutes");
app.use("/api", impactRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🌱 AI Impact Reporting Generator is running");
});

// Server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Module 3 running on http://localhost:${PORT}`);
});