const db = require("../config/db");
const { generateImpact } = require("../services/impactService");

exports.generateImpactReport = (req, res) => {
  const { product_id } = req.body;

  if (!product_id) {
    return res.status(400).json({ error: "product_id is required" });
  }

  db.query(
    "SELECT * FROM products WHERE id = ?",
    [product_id],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }

      const impact = generateImpact(results[0]);

      db.query(
        `INSERT INTO impact_reports
        (product_id, plastic_saved_grams, carbon_avoided_grams, local_sourcing_summary, impact_statement)
        VALUES (?, ?, ?, ?, ?)`,
        [
          product_id,
          impact.plastic_saved_grams,
          impact.carbon_avoided_grams,
          impact.local_sourcing_summary,
          impact.impact_statement
        ],
        () => {
          res.json({
            message: "Impact report generated",
            impact
          });
        }
      );
    }
  );
};