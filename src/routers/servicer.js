const express = require("express");
const {
  getServicers,
  getServicer,
  getServicersByType,
} = require("../controllers/servicer");

const router = express.Router();

router.get("/servicers", getServicers);
router.get("/servicers/:servicerId", getServicer);
router.get("/servicers/type/:serviceType", getServicersByType);

module.exports = router;
