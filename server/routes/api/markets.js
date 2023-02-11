const express = require("express");
const router = express.Router();
const methods = require("../../services/services");

router.get("/api/markets", async (req, res, next) => {
  const response = await methods.getMethod("/markets");
  res.send(response.data);
  res.end();
});

module.exports = router;
