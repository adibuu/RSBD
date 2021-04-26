const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  servicer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Servicer",
    required: true,
  },
  serviceType: {
    type: String,
    enum: [
      "ubezpieczenie",
      "usługi sprzątające",
      "wywóz śmieci",
      "dostawa gazu",
      "dostawa energii elektrycznej",
      "dostawa wody",
      "usługi remontowe",
    ],
    required: true,
  },
});

module.exports = mongoose.model("Offer", offerSchema);
