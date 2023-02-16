const express = require("express");
const router = express.Router();
const services = require("../../services/services");

app.router(`/api/coins/${id}`, async (req, res, next) => {
  const response = await services.coinDetailsPageApi(`/coins/${id}`);
  console.log(response.data);
  res.send(response.data);
  res.end();
});
module.exports = router;
