const axios = require("axios");

module.exports = httpMehods = {
  URL: "https://api.coingecko.com/api/v3",
  responseReturned: [],

  getMethod: async function (url) {
    try {
      const response = await axios.get(`${this.URL}${url}`);
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
