const express = require("express");
const { getServicers, getServicer } = require("../controllers/servicer");

const router = express.Router();

router.get("/servicers", getServicers);
router.get("/servicers/:servicerId", getServicer);

module.exports = router;
