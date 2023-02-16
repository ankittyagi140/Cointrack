const express = require("express");
const router = express.Router();
const services = require("../../services/services");

router.get("/api/coins/markets/topgainer", async (req, res, next) => {
  const response = await services.topGainerCoinApi("/coins/markets");
  res.send(response.data);
  res.end();
});
module.exports = router;
