const axios = require("axios");

module.exports = mehods = {
  URL: "",
  responseReturned: [],
  getMethod: async function (url) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins${url}?vs_currency=${"usd"}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      this.responseReturned = response;
    } catch (error) {
      console.warn(error.message);
    }
    return this.responseReturned;
  },
  postMethod: async function (url) {
    try {
      const response = await axios.post("url");
      this.responseReturned = response;
    } catch (error) {
      console.warn(`error.message`);
    }
    return this.responseReturned;
  },
};
