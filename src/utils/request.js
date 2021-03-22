import { axiosAuth as axios } from "utils/axios";

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response && (response.status === 204 || response.status === 205)) {
    return null;
  }
  if (
    response.headers &&
    response.headers.authtoken &&
    localStorage.getItem("authtoken")
  ) {
    localStorage.setItem("authtoken", response.headers.authtoken);
  }
  return response.data;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response && response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response && response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(options) {
  return axios(options).then(checkStatus).then(parseJSON);
}

export function postRequest(url, data) {
  return request({ url, data, method: "POST" });
}

export function getter(url) {
  return request({ url, method: "GET" });
}

export function encryptRequestPayload(payload, publicKey) {
  let encPayload = {};
  console.log(payload);
  //Object.keys(payload).forEach(item => encPayload[item] = encryptRSAdata(payload[item], publicKey))
  return encPayload;
}
