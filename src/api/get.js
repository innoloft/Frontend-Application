import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api-test.innoloft.com/',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
});

export default API;
