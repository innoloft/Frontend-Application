import axios, { AxiosRequestConfig } from "axios";
import { config } from "./api.end.points";
const { ROOT_URL } = config;

/*  Here we will handle request and response from API 

    For example in request case, 
        1- Append access token before send request to API
        2- If request is for login/signup don't append token in request because in that case no need
    
    In response case
        1- If we received unauthroized request for refresh token 
        etc.

        Although it was not mentioned in requirement but I want to present that
        I know about it and have implemented it in my previous projects
*/

const axiosBasic = axios.create({
    baseURL: ROOT_URL,
    timeout: 60 * 1000,
    headers: { Pragma: "no-cache" },
});


const getAuthToken = () => {
    // Get token from localstorage and return (refreshToken, accessToken);
}

export const configureAxiosDefaults = async () => {
    axiosBasic.defaults.baseURL = ROOT_URL;
    axiosBasic.defaults.headers.post["Content-Type"] = "application/json";

    axiosBasic.interceptors.request.use(
        (configuration: AxiosRequestConfig) => {
            const cfg = configuration;
            configuration.headers.Pragma = "no-cache";
            if (configuration.url) {
                const url = configuration.url.toLowerCase();
                if (url.endsWith("login") || url.endsWith("forgotpassword")) {
                    return cfg;
                }
            }
            const token = getAuthToken();
            if (token !== null) {
                cfg.headers.Authorization = `Bearer ${token}`;
            }
            return Promise.resolve(cfg);
        },
        (err) => {
            Promise.reject(err);
        }
    );
};

export const axiosResponse = async () => {
    axiosBasic.interceptors.response.use(undefined, async (err) => {
        if (err.config && err.response && err.response.status === 401) {
            const token = getAuthToken();
            if (token !== null) {

                // request for refresh token
                // return Promise.resolve(axiosBasic.request(err.config));

            }
            return Promise.reject(err);
        }
        return Promise.reject(err);
    });
};

export { axiosBasic };
