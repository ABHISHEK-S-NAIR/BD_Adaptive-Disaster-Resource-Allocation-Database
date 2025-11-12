import axios from 'axios';

const httpClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(new Error(message));
  }
);

export default httpClient;
