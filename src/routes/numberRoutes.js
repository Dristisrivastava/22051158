const express = require("express");
const { fetchNumbers } = require("../controllers/averageController");

const router = express.Router();
router.get("/:type", fetchNumbers);

module.exports = router;