const HOST_URL = "http://localhost:3031/";
const AccountController = "account";

export const config = {
  ROOT_URL: `${HOST_URL}api/`,
  REST_API: {
    Account: {
      Save: `${AccountController}/userprofile`,    // This is dumy end-point for user profile
    }
  },
};
