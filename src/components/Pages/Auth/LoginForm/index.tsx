import React from "react";
import PageContainer from "../PageContainer";
import BlueButton from "@/components/UI/Buttons/BlueButton";
import InputFields from "@/components/UI/InputFields";
import LogoTitle from "@/components/UI/LogoTitle";
import AuthLink from "../PageContainer/AuthLink";

const LoginForm = () => {
  return (
    <PageContainer className="gap-[30px]">
      <LogoTitle />
      <div className="flex flex-col gap-5 max-w-[306px] w-full">
        <InputFields placeholder={"Електронна адреса"} />
        <InputFields placeholder={"Пароль"} type="password" />
      </div>
      <BlueButton onClick={() => {}}>Увійти</BlueButton>
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
