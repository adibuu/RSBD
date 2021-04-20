const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  servicer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Servicer",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Offer", offerSchema);
