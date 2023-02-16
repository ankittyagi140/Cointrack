import axios from "axios";

export const httpMehods = {
  responseReturned: [],
  // payload: {},
  getMethod: async function (url) {
    try {
      const response = await axios.get(`${url}`);
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
      console.warn(error.message);
    }
    return this.responseReturned;
  },
};
