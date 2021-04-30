import { handleResponse, handleError } from "./apiUtils";
const appId =
	(process.env.REACT_APP_APP_ID ? process.env.REACT_APP_APP_ID : 1) + "/";
const configUrl = process.env.REACT_APP_API_URL + "configuration/" + appId;

export function getConfiguration() {
	return fetch(configUrl).then(handleResponse).catch(handleError);
}
