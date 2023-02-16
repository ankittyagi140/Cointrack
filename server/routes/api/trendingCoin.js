const express = require("express");
const router = express.Router();
const services = require("../../services/services");

router.get("/api/search/trending", async (req, res, next) => {
  const response = await services.trendingCoinApi("/search/trending");
  res.send(response.data);
  res.end();
});
module.exports = router;
