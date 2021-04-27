const express = require("express");
const {
  getOffers,
  getOffer,
  getOffersByServicer,
  getOffersRaportInsurance,
  getOffersRaportCleaning,
  getOffersRaportGarbage,
  getOffersRaportRenovation,
  getOffersRaportWater,
  getOffersRaportGas,
  getOffersRaportElectricity,
} = require("../controllers/offer");

const router = express.Router();

router.get("/offers", getOffers);
router.get("/offers/id/:offerId", getOffer);
router.get("/offers/servicer/:servicerId", getOffersByServicer);
router.get("/offers/raport/insurance", getOffersRaportInsurance);
router.get("/offers/raport/cleaning", getOffersRaportCleaning);
router.get("/offers/raport/garbage", getOffersRaportGarbage);
router.get("/offers/raport/renovation", getOffersRaportRenovation);
router.get("/offers/raport/water", getOffersRaportWater);
router.get("/offers/raport/gas", getOffersRaportGas);
router.get("/offers/raport/electricity", getOffersRaportElectricity);

module.exports = router;
