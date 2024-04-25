import BlueButton from "@/components/UI/Buttons/BlueButton";
import InputFields from "@/components/UI/InputField";
import LogoTitle from "@/components/UI/LogoTitle";
import React, { useCallback, useRef, useState } from "react";
import SendVerifyNewAccountEmail from "../AuthProcess/SendVerifyNewAccountEmail";
import PageContainer from "../PageContainer";
import AuthLink from "../PageContainer/AuthLink";
import useAuthStore from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { regUser } from "@/server/actions";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const setShowVerifyEmail = useAuthStore((state) => state.setShowVerifyEmail);
  const showVerifyEmail = useAuthStore((state) => state.showVerifyEmail);

  const password = useAuthStore((state) => state.regPassword);
  const confirmPassword = useAuthStore((state) => state.regConfirmPassword);
  const email = useAuthStore((state) => state.regEmail);
  const setPassword = useAuthStore((state) => state.setRegPassword);
  const setConfirmPassword = useAuthStore(
    (state) => state.setRegConfirmPassword
  );
  const setEmail = useAuthStore((state) => state.setRegEmail);

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (newUser: { email: string; password: string }) => {
      try {
        const response = await regUser(newUser);
        if (response.status === 302) {
          toast("Account already exists", {
            type: "error",
            autoClose: 2000,
            position: "top-center",
          });
        } else if (response.status === 201) {
          toast("Successfully registered. Sending verification email...", {
            type: "success",
            autoClose: 2000,
            position: "top-center",
          });
          setShowVerifyEmail(true);
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

  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast("Passwords do not match!", {
        type: "error",
        autoClose: 2000,
        position: "top-center",
      });
      return;
    }

    mutate({ email: email, password: password });
  };

  if (showVerifyEmail) {
    return <SendVerifyNewAccountEmail />;
  }

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

        <InputFields
          placeholder={"Підтвердити пароль"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
      </div>

      <BlueButton onClick={handleRegister}>Зареєструватися</BlueButton>
      <AuthLink href="/auth/login" text="Увійти" subText="Вже є аккаунт? " />
    </PageContainer>
  );
};

export default RegisterForm;
