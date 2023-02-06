import axios from "axios";

export const mehods = {
  URL: "http://localhost:8080",
  responseReturned: [],
  getMethod: async function (url) {
    console.log(this);
    try {
      const response = await axios.get(`${this.URL}${url}`);
      this.responseReturned = response;
    } catch (error) {
      console.warn(`error.message`);
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
