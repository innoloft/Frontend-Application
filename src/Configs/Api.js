const Seconds = n => n * 1000;

const apiUrl = process.env.API_BASE_URL || `https://api-test.innoloft.com`;

const ApiConfigs = {
  apiUrl,
  timeout: Seconds(100),
  clientToken: 'SECRET_TOKEN',
  version: '1.0.0',
};
export default ApiConfigs;
