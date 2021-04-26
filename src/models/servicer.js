const mongoose = require("mongoose");

const servicerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    enum: [
      "ubezpieczenia",
      "usługi sprzątające",
      "wywóz śmieci",
      "dostawa gazu",
      "dostawa energii elektrycznej",
      "dostawa wody",
      "usługi remontowe",
    ],
    required: true,
  },
  nip: {
    type: Number,
    required: true,
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
  },
  contactInfo: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Servicer", servicerSchema);
