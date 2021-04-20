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
