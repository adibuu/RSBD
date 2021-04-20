const express = require("express");

const router = express.Router();

router.get("/offers");
router.get("/offers/:offerId");

module.exports = router;
