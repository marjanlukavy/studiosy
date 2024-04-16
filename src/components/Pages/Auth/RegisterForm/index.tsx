import BlueButton from "@/components/Ui/Buttons/BlueButton";
import InputFields from "@/components/Ui/InputFields";
import LogoTitle from "@/components/Ui/LogoTitle";
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
  return !showVerifyEmail ? (
    <PageContainer className="gap-[30px]">
      <LogoTitle />
      <div className="flex flex-col gap-5 max-w-[306px]">
        <InputFields placeholder={"Електронна адреса"} />
        <InputFields placeholder={"Пароль"} type="password" />
        <InputFields placeholder={"Підтвердити пароль"} type="password" />
      </div>
      <BlueButton onClick={handleRegister}>Зареєструватися</BlueButton>

      <AuthLink href="/auth/login" text="Увійти" subText="Вже є аккаунт? " />
    </PageContainer>
  ) : (
    <VerifyNewAccountEmail />
  );
};

export default RegisterForm;
