const express = require("express");
const {
  getOffers,
  getOffer,
  getOffersByServicer,
  getOffersRaportInsurance,
  getOffersRaportCleaning,
  getOffersRaportGarbage,
} = require("../controllers/offer");

const router = express.Router();

router.get("/offers", getOffers);
router.get("/offers/id/:offerId", getOffer);
router.get("/offers/servicer/:servicerId", getOffersByServicer);
router.get("/offers/raport/insurance", getOffersRaportInsurance);
router.get("/offers/raport/cleaning", getOffersRaportCleaning);
router.get("/offers/raport/garbage", getOffersRaportGarbage);

module.exports = router;
