const Servicer = require("../models/servicer");
const createError = require("../utils/createError");

exports.getServicers = async (req, res, next) => {
  try {
    const servicers = await Servicer.find({});
    if (!servicers) {
      createError("Could not find servicers", 404);
    }
    return res.send(servicers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getServicer = async (req, res, next) => {
  try {
    const servicer = await Servicer.findById(req.params.servicerId);
    if (!servicer) {
      createError("Could not find servicer", 404);
    }
    return res.send(servicer);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getServicersByType = async (req, res, next) => {
  try {
    const servicers = await Servicer.find({
      serviceType: req.params.serviceType,
    }).exec();

    if (!servicers) {
      createError("Could not find servicers", 404);
    }

    return res.send(servicers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
