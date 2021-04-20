const express = require("express");
const {
  getOffers,
  getOffer,
  getOffersByServicer,
} = require("../controllers/offer");

const router = express.Router();

router.get("/offers", getOffers);
router.get("/offers/:offerId", getOffer);
router.get("/offers/servicer/:servicerId", getOffersByServicer);

module.exports = router;
