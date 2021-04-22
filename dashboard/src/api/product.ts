import { AxiosResponse } from "axios";
import { API } from "../app/api";
import { Product } from "../types/Product";

/**
 * Retrieves product object by id using API.
 * Status codes:
 *     200 if retrieved product successfully
 *     404 if such product does not exist
 * @param {?number} productId ID of the product to retrieve
 * @returns {Promise} Promise object with AxiosResponse, containing product object
 */
export function getProduct(productId: number): Promise<AxiosResponse<Product>> {
    return API.get(`/product/${productId}/`);
}

/**
 * update product object by id using API.
 * Status codes:
 *     200 if retrieved product successfully
 *     404 if such product does not exist
 * @param {?number} productId ID of the product to retrieve
 * @returns {Promise} Promise object with AxiosResponse, containing product object
 */
export function productUpdate(productId: number, payload: Product): Promise<AxiosResponse<Product>> {
    return API.put(`/product/${productId}/`, {...payload});
}
