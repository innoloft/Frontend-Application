import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL;

export function getProduct() {
	return fetch(baseUrl + "product/6781/")
		.then(handleResponse)
		.catch(handleError);
}

export function getTrl() {
	return fetch(baseUrl + "trl/")
		.then(handleResponse)
		.catch(handleError);
}

export function saveProduct(product) {
	return fetch(baseUrl + "product/6781/", {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(product),
	})
		.then(handleResponse)
		.catch(handleError);
}
