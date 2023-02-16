import { httpMehods } from "./httpmethods";

export const services = {
  marketsDataApi: function (url) {
    return httpMehods.getMethod(url);
  },
  trendingCoinApi: function (url) {
    return httpMehods.getMethod(url);
  },
  recentlyAddedCoinApi: function (url) {
    return httpMehods.getMethod(url);
  },
  topGainerCoinApi: function (url) {
    return httpMehods.getMethod(url);
  },
  coinDetailsPageApi: function (url) {
    return httpMehods.getMethod(url);
  },
};
