const db = require("../config/db");

exports.getProductDetails = (req, res) => {
  const { product_id } = req.params;

  if (!product_id) {
    return res.status(400).json({ error: "Product ID is required" });
  }

  const sql = `
    SELECT id, product_name, description
    FROM products
    WHERE id = ?
  `;

  db.query(sql, [product_id], (err, results) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (!results.length) {
      return res.status(404).json({ error: "No product found for this ID" });
    }

    const product = results[0];

    res.json({
      product: {
        id: product.id,
        name: product.product_name,
        description: product.description || ""
      }
    });
  });
};

exports.generateImpact = (req, res) => {
  const { product_id } = req.body;
  const requestStartedAt = Date.now();

  if (!product_id) {
    return res.status(400).json({ error: "Product ID is required" });
  }

  setTimeout(() => {
    const sql = `
      SELECT
        ir.*,
        p.product_name,
        p.description AS product_description
      FROM impact_reports ir
      LEFT JOIN products p ON p.id = ir.product_id
      WHERE ir.product_id = ?
    `;

    db.query(sql, [product_id], (err, results) => {
      if (err) {
        console.error("DB Error:", err);
        return res.status(500).json({ error: "Database error" });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: "No impact data found" });
      }

      const impact = results[0];

      // 🧠 Confidence logic
      let confidenceScore = 70;

      if (impact.plastic_saved_grams > 300) confidenceScore += 10;
      if (impact.carbon_avoided_grams > 200) confidenceScore += 10;

      let confidenceLabel = "Moderate";

      if (confidenceScore >= 90) confidenceLabel = "High";
      else if (confidenceScore >= 80) confidenceLabel = "Strong";
      else if (confidenceScore >= 70) confidenceLabel = "Good";

      res.json({
        impact: {
          ...impact,
          confidence_score: confidenceScore,
          confidence_label: confidenceLabel
        },
        product: {
          id: impact.product_id,
          name: impact.product_name || `Product #${impact.product_id}`,
          description: impact.product_description || ""
        },
        meta: {
          product_id,
          product_name: impact.product_name || `Product #${impact.product_id}`,
          generated_at: new Date().toISOString(),
          processing_time_ms: Date.now() - requestStartedAt
        }
      });
    });
  }, 2500);
};
