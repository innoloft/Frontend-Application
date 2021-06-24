import axios from 'axios';

const url = "https://api-test.innoloft.com";

const instance = axios.create({ baseURL: url});

export default instance;