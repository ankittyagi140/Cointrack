const express = require("express");
const router = express.Router();
const services = require("../../services/services");

router.get(`/api/coins/id`, async (req, res, next) => {
  // const response = await services.coinDetailsPageApi(`/coins/${id}`);
  console.log(req.params);
  // console.log(response.data);
  // res.send(response.data);
  res.send("hello");
  // res.end();
  console.log("hello");
});
module.exports = router;