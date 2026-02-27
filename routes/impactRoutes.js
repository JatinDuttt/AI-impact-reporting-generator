const express = require("express");
const router = express.Router();
const { generateImpactReport } = require("../controllers/impactController");

router.post("/impact", generateImpactReport);

module.exports = router;