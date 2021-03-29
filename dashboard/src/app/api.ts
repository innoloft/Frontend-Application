import axios from "axios";

export const API = axios.create({
    baseURL: 'https://api-test.innoloft.com',

    // TODO: set sensible timeout
    timeout: 2 * 60 * 1000
});
