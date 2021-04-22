import { AxiosResponse } from "axios";
import { API } from "../app/api";
import { Trl } from "../types/Trl";

/**
 * Retrieves trl list object by id using API.
 * Status codes:
 *     200 if retrieved trl list successfully
 *     404 if such trl list does not exist
 * @returns {Promise} Promise object with AxiosResponse, containing product object
 */
export function getTrlList(): Promise<AxiosResponse<Trl[]>> {
    return API.get(`/trl/`);
}