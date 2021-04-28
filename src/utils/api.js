import axios from 'axios';

const baseUrl = 'https://api-test.innoloft.com';

export const FetchProductRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}${path}`);
  return response;
};

export const UpdateProductRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}${path}`, data);
  return response;
};
