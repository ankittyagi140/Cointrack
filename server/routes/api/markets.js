const express = require("express");
const router = express.Router();
const services = require("../../services/services");

router.get("/api/coins/markets", async (req, res, next) => {
  const response = await services.marketsDataApi("/coins/markets");
  res.send(response.data);
  res.end();
});

module.exports = router;
