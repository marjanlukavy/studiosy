import axios, { CreateAxiosDefaults } from "axios";
import useTokenStore from "@/stores/token.store";

export const auth = axios.create({
  baseURL: "http://www.studiosy.info:8080/v1",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // "Access-Control-Allow-Credentials": "true",
  },
} as CreateAxiosDefaults);

export const controller = axios.create({
  baseURL: "http://www.studiosy.info:8081/v1",
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
