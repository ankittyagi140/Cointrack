const httpMehods = require("./httpMethods");

const services = {
  marketsDataApi: function (url) {
    return httpMehods.getMethod(
      `${url}?vs_currency=${"usd"}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
  },
  topGainerCoinApi: function (url) {
    return httpMehods.getMethod(
      `${url}?vs_currency=${"usd"}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
  },
  trendingCoinApi: function (url) {
    return httpMehods.getMethod(url);
  },
  recentlyAddedCoinApi: function (url) {
    return httpMehods.getMethod(url);
  },
  coinDetailsPageApi: function (url) {
    return httpMehods.getMethod(url);
  },
};
module.exports = services;
