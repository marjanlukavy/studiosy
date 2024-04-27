import axios, { CreateAxiosDefaults } from "axios";
import useTokenStore from "@/stores/token.store";

const dev = false; // CORS failed on dev with https:// , but good on prod vercel

export const auth = axios.create({
  baseURL: dev
    ? "http://www.studiosy.info:8080/v1"
    : "https://www.studiosy.info/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
  },
} as CreateAxiosDefaults);

export const main = axios.create({
  baseURL: dev
    ? "http://www.studiosy.info:8081/v1"
    : "https://www.studiosy.info/v1",
  headers: {
    "Content-Type": "application/json",
  },
} as CreateAxiosDefaults);

auth.interceptors.request.use(
  async (config) => {
    const token = useTokenStore.getState?.().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
