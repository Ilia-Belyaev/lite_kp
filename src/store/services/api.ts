import axios, { AxiosInstance } from 'axios';

const KP_API_KEY = import.meta.env.VITE_API_KEY as string;
const BACKEND_URL = 'https://api.kinopoisk.dev/v1.4';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'X-API-KEY': `${KP_API_KEY}`,
    }
  });

  return api;
};
