const express = require("express");
const {
  getOffers,
  getOffer,
  getOffersByServicer,
  getOffersRaportInsurance,
  getOffersRaportCleaning,
} = require("../controllers/offer");

const router = express.Router();

router.get("/offers", getOffers);
router.get("/offers/id/:offerId", getOffer);
router.get("/offers/servicer/:servicerId", getOffersByServicer);
router.get("/offers/raport/insurance", getOffersRaportInsurance);
router.get("/offers/raport/cleaning", getOffersRaportCleaning);

module.exports = router;
