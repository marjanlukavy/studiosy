import { auth } from "@/server/axiosConfig";
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
    `https://www.studiosy.info/v1/auth/email-verification?token=${credentials?.token}`,
    credentials?.password
  );
};

export const confirmVerify = async (credential: {
  token?: ResetAndVerifyToken;
}) => {
  return await axios.get(
    `https://www.studiosy.info/v1/auth/email-verification?token=${credential?.token}`
  );
};
