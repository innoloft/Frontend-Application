const authRequestInterceptor = async (config) => {
  if (config.url) {
    const authToken = localStorage.getItem("authtoken");

    config.headers = {
      ...config.headers,
      authtoken: authToken,
    };
  }

  return config;
};

const authResponseInterceptor = async (res) => {
  if (res.config.url.search(".*(login|auth)$") > -1) {
    const { authtoken } = res.headers;
    localStorage.setItem("authtoken", authtoken);
  }

  return res;
};

export { authRequestInterceptor, authResponseInterceptor };
