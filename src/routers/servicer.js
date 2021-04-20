const express = require("express");

const router = express.Router();

router.get("/servicers");
router.get("/servicers/:servicerId");

module.exports = router;
