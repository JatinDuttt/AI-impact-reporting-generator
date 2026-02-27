function generateImpact(product) {
  const text = `${product.product_name} ${product.description}`.toLowerCase();

  let plasticSaved = 0;
  let carbonAvoided = 0;
  let localSummary = "Standard sourcing";

  if (text.includes("plastic free") || text.includes("plastic-free")) {
    plasticSaved += 120;
  }
  if (text.includes("reusable")) {
    plasticSaved += 180;
  }
  if (text.includes("bamboo") || text.includes("steel")) {
    plasticSaved += 200;
  }

  carbonAvoided = Math.round(plasticSaved * 0.65);

  if (text.includes("local") || text.includes("made in india")) {
    localSummary = "Locally sourced with reduced transport emissions";
    carbonAvoided += 50;
  }

  const impactStatement =
    `By choosing this product, approximately ${plasticSaved}g of plastic waste ` +
    `and ${carbonAvoided}g of carbon emissions were avoided.`;

  return {
    plastic_saved_grams: plasticSaved,
    carbon_avoided_grams: carbonAvoided,
    local_sourcing_summary: localSummary,
    impact_statement: impactStatement
  };
}

module.exports = { generateImpact };