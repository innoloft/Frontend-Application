// utils/API.js

import axios from "axios";


/**
 * 
 * ===================
 * | API Configuration
 * ===================
 * 
 * @description - This is the base configuraiton file for the APIS 
 * to be used throught the project.
 * 
 * @param -
 * (1) ===> baseUrl
 * (2) ==-> responseType
 * 
 * */ 
export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json"
});

/*------------------------*/ 