import axios from "axios";
import { create } from "apisauce";
import ApiConfigs from "../Configs/Api";

const axiosInstance = axios.create({
  baseURL: ApiConfigs.apiUrl,
  timeout: ApiConfigs.timeout,
  headers: {
    Accept: `application/json;v=${ApiConfigs.version}`,
    "Content-Type": "application/json",
  },
});

const Api = create({ axiosInstance: axiosInstance });
const CancelToken = axios.CancelToken;
const requestsSourceCancellation = CancelToken.source();

const endpoints = {
  general: {
    configuration: (data, headers) => Api.get(`/configuration/${data.AppID}/`, {}, { ...headers, cancelToken: requestsSourceCancellation.token, }),
  },
  product: {
    getOne: (data, headers) => Api.get(`/product/6781/`, {}, { ...headers, cancelToken: requestsSourceCancellation.token, }),
    getTrl: (data, headers) => Api.get(`/trl/`, {}, { ...headers, cancelToken: requestsSourceCancellation.token, }),
    put: (data, headers) => Api.put(`/product/6781/`, data, { ...headers, cancelToken: requestsSourceCancellation.token, }),
  }

};

export default endpoints;
