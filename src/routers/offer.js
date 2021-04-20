const express = require("express");
const { getOffers, getOffer } = require("../controllers/offer");

const router = express.Router();

router.get("/offers", getOffers);
router.get("/offers/:offerId", getOffer);

module.exports = router;
