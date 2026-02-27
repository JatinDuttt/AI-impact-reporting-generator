CREATE DATABASE ai_impact;
USE ai_impact;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(150),
  description TEXT
);

CREATE TABLE impact_reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  plastic_saved_grams INT,
  carbon_avoided_grams INT,
  local_sourcing_summary VARCHAR(255),
  impact_statement TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);