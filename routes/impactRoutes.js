const express = require("express");

const router = express.Router();

const { generateImpact, getProductDetails } = require("../controllers/impactController");

router.get("/products/:product_id", getProductDetails);
router.post("/impact", generateImpact);


module.exports = router;
