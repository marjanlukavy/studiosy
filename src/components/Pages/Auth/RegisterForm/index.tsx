import BlueButton from "@/components/UI/Buttons/BlueButton";
import InputFields from "@/components/UI/InputField";
import LogoTitle from "@/components/UI/LogoTitle";
import React from "react";
import VerifyNewAccountEmail from "../AuthProcess/VerifyNewAccountEmail";
import PageContainer from "../PageContainer";
import AuthLink from "../PageContainer/AuthLink";
import useAuthStore from "@/stores/auth.store";

const RegisterForm = () => {
  const setShowVerifyEmail = useAuthStore((state) => state.setShowVerifyEmail);

  const showVerifyEmail = useAuthStore((state) => state.showVerifyEmail);

  const handleRegister = () => {
    setShowVerifyEmail(true);
  };

  if (showVerifyEmail) {
    <VerifyNewAccountEmail />;
  }

  return (
    <PageContainer className="gap-[30px]">
      <LogoTitle />

      <div className="flex flex-col gap-5 max-w-[306px] w-full">
        <InputFields placeholder={"Електронна адреса"} />

        <InputFields placeholder={"Пароль"} type="password" />

        <InputFields placeholder={"Підтвердити пароль"} type="password" />
      </div>

      <BlueButton onClick={handleRegister}>Зареєструватися</BlueButton>

      <AuthLink href="/auth/login" text="Увійти" subText="Вже є аккаунт? " />
    </PageContainer>
  );
};

export default RegisterForm;
