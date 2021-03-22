import axios from "axios";
import { SERVER_DOMAIN } from "./constants";

// const VERSION_CODE = 'v0';

// this can only be used for auth!
const authInstance = axios.create({
  // baseURL: `${SERVER_DOMAIN}`,
});

// authInstance.interceptors.request.use(authRequestInterceptor);

// authInstance.interceptors.response.use(
//   authResponseInterceptor,
//   function (error) {
//     const { response } = error;
//     if (response.status === 401) {
//       window.localStorage.removeItem("authtoken");
//       window.localStorage.removeItem("onboardingState");
//       history.push("/auth", { inactivity: true });
//     }
//     return response;
//   }
// );

export { authInstance as axiosAuth };
