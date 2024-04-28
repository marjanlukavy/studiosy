import { auth, main } from "@/server/axiosConfig";
import axios from "axios";
import { ResetAndVerifyToken } from "@/types/auth";

export const regUser = async (newUser: { email: string; password: string }) => {
  return await auth.post("/auth/register", newUser);
};

export const logUser = async (credentials: {
  email: string;
  password: string;
}) => {
  return await auth.post("/auth/login", credentials);
};

export const sendResetPass = async (credential: { email: string }) => {
  return await auth.post("/auth/reset-password", credential);
};

export const confirmResetPass = async (credentials: {
  token?: ResetAndVerifyToken;
  password?: string;
}) => {
  return await auth.patch(
    `/auth/email-verification?token=${credentials?.token}`,
    credentials?.password
  );
};

export const confirmVerify = async (credential: {
  token?: ResetAndVerifyToken;
}) => {
  return await auth.get(`/auth/email-verification?token=${credential?.token}`);
};

export const getAllCities = async () => {
  return await main.get("/cities");
};

export const getStudiosByCityId = async (cityId: string) => {
  return await main.get(`/cities/${cityId}/studios`);
};

export const getStudioById = async (id: string) => {
  return await main.get(`/studios/${id}`);
};

export const getStageById = async (id: string) => {
  return await main.get(`/stages/${id}`);
};

export const getStudiosOwner = async () => {
  return await main.get(`/studios`);
};
