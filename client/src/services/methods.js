import axios from "axios";

export const httpMehods = {
  responseReturned: [],

  getMethod: async function (url) {
    try {
      const response = await axios.get(`${url}`);
      this.responseReturned = response;
    } catch (error) {
      console.warn(`error.message`);
    }
    console.log(this.responseReturned.data);
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
