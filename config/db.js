require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "ai_impact"
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB Connection Failed:", err.message);
  } else {
    console.log("✅ Impact DB Connected");
  }
});

module.exports = db;