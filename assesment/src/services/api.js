import axios from "axios";

export default axios.create({
  baseURL: "https://api-test.innoloft.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
