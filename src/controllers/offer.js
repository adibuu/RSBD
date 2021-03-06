const Offer = require("../models/offer");
const createError = require("../utils/createError");

exports.getOffers = async (req, res, next) => {
  try {
    const offers = await Offer.find({}).populate("servicer").exec();
    if (!offers) {
      createError("Could not find offers", 404);
    }
    return res.send(offers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOffer = async (req, res, next) => {
  try {
    const offer = await Offer.findById(req.params.offerId)
      .populate("servicer")
      .exec();
    if (!offer) {
      createError("Could not find offer", 404);
    }
    return res.send(offer);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOffersByServicer = async (req, res, next) => {
  try {
    const offers = await Offer.find({
      servicer: req.params.servicerId,
    })
      .populate("servicer")
      .exec();

    if (!offers) {
      createError("Could not find offers", 404);
    }

    return res.send(offers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOffersRaportInsurance = async (req, res, next) => {
  try {
    const offers = await Offer.find(
      { serviceType: "ubezpieczenie" },
      { _id: 0, oneTimePrice: 1, insuranceCoverage: 1, OC: 1 }
    )
      .sort({ oneTimePrice: 1 })
      .populate("servicer", { name: 1, _id: 0 })
      .exec();
    if (!offers) {
      createError("Could not find offers", 404);
    }
    return res.send(offers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOffersRaportCleaning = async (req, res, next) => {
  try {
    const offers = await Offer.find(
      { serviceType: "usługi sprzątające" },
      { _id: 0, pricePerSquareMeter: 1, serviceScope: 1 }
    )
      .sort({ pricePerSquareMeter: 1 })
      .populate("servicer", { name: 1, _id: 0 })
      .exec();
    if (!offers) {
      createError("Could not find offers", 404);
    }
    return res.send(offers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOffersRaportGarbage = async (req, res, next) => {
  try {
    const offers = await Offer.find(
      { serviceType: "wywóz śmieci" },
      { _id: 0, priceForOneTon: 1 }
    )
      .populate("servicer", { name: 1, _id: 0 })
      .exec();
    if (!offers) {
      createError("Could not find offers", 404);
    }
    return res.send(offers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOffersRaportRenovation = async (req, res, next) => {
  try {
    const offers = await Offer.find(
      { serviceType: "usługi remontowe" },
      { _id: 0, oneTimePrice: 1, pricePerSquareMeter: 1, serviceScope: 1 }
    )
      .sort({ oneTimePrice: 1 })
      .populate("servicer", { name: 1, _id: 0 })
      .exec();
    if (!offers) {
      createError("Could not find offers", 404);
    }
    return res.send(offers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOffersRaportWater = async (req, res, next) => {
  try {
    const offers = await Offer.find(
      { serviceType: "dostawa wody" },
      { _id: 0, pricePerCubicMeter: 1, pricePerLiter: 1, serviceScope: 1 }
    )
      .sort({ pricePerLiter: 1 })
      .populate("servicer", { name: 1, _id: 0 })
      .exec();
    if (!offers) {
      createError("Could not find offers", 404);
    }
    return res.send(offers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOffersRaportGas = async (req, res, next) => {
  try {
    const offers = await Offer.find(
      { serviceType: "dostawa gazu" },
      { _id: 0, pricePerCubicMeter: 1, pricePerCBootle: 1, serviceScope: 1 }
    )
      .sort({ pricePerCBootle: 1 })
      .populate("servicer", { name: 1, _id: 0 })
      .exec();
    if (!offers) {
      createError("Could not find offers", 404);
    }
    return res.send(offers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getOffersRaportElectricity = async (req, res, next) => {
  try {
    const offers = await Offer.find(
      { serviceType: "dostawa energii elektrycznej" },
      { _id: 0, pricePerMonth: 1, pricePerkWh: 1, serviceScope: 1 }
    )
      .sort({ pricePerMonth: 1 })
      .populate("servicer", { name: 1, _id: 0 })
      .exec();
    if (!offers) {
      createError("Could not find offers", 404);
    }
    return res.send(offers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
