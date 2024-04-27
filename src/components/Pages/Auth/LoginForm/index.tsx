import React from "react";
import PageContainer from "../PageContainer";
import BlueButton from "@/components/UI/Buttons/BlueButton";
import InputFields from "@/components/UI/InputField";
import LogoTitle from "@/components/UI/LogoTitle";
import AuthLink from "../PageContainer/AuthLink";
import useAuthStore from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { logUser, regUser } from "@/server/actions";
import { toast } from "react-toastify";
import useTokenStore from "@/stores/token.store";
import { useRouter } from "next/router";
import { auth } from "@/server/axiosConfig";

const LoginForm = () => {
  const email = useAuthStore((state) => state.logEmail);
  const password = useAuthStore((state) => state.logPassword);
  const setEmail = useAuthStore((state) => state.setLogEmail);
  const setPassword = useAuthStore((state) => state.setLogPassword);

  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const setRefreshToken = useTokenStore((state) => state.setRefreshToken);

  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      try {
        const response = await logUser(credentials);
        if (response.status === 200) {
          toast("Successfully logged in.", {
            type: "success",
            autoClose: 2000,
            position: "top-center",
          });

          setAccessToken(response.data.accessToken);
          setRefreshToken(response.data.refreshToken);

          try {
            const meResponse = await auth.get("/me");
            const userType = meResponse.data?.userType;

            if (userType === "superAdmin") {
              await router.push("/admin");
            } else if (userType === "viewer") {
              await router.push("/");
            }
          } catch (error: any) {
            toast(error.response?.data?.reason || "An error occurred", {
              type: "error",
              autoClose: 2000,
              position: "top-center",
            });
            return error.response?.data || "An error occurred";
          }
        }
        return response.data;
      } catch (error: any) {
        toast(error.response?.data?.reason || "An error occurred", {
          type: "error",
          autoClose: 2000,
          position: "top-center",
        });
        return error.response?.data || "An error occurred";
      }
    },
  });

  const handleLogin = async () => {
    mutate({ email: email, password: password });
  };

  return (
    <PageContainer className="gap-[30px]">
      <LogoTitle />
      <div className="flex flex-col gap-5 max-w-[306px] w-full">
        <InputFields
          placeholder={"Електронна адреса"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputFields
          placeholder={"Пароль"}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <BlueButton onClick={handleLogin}>Увійти</BlueButton>
      <div className="flex flex-col gap-[30px] items-center">
        <AuthLink
          href="/auth/register"
          text="Зареєструватись"
          subText="Немає аккаунту? "
        />
        <AuthLink href="/auth/restore" text="Забули пароль?" />
      </div>
    </PageContainer>
  );
};

export default LoginForm;
