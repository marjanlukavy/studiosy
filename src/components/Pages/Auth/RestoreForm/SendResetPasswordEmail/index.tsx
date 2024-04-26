import React from "react";
import PageContainer from "@/components/Pages/Auth/PageContainer";
import LogoTitle from "@/components/UI/LogoTitle";
import InputField from "@/components/UI/InputField";
import BlueButton from "@/components/UI/Buttons/BlueButton";
import AuthLink from "@/components/Pages/Auth/PageContainer/AuthLink";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { sendResetPass } from "@/server/actions";
import { toast } from "react-toastify";

const SendResetPasswordEmail = () => {
  const router = useRouter();
  const restoreEmail = useAuthStore((state) => state.restoreEmail);
  const setRestoreEmail = useAuthStore((state) => state.setRestoreEmail);

  const { mutate } = useMutation({
    mutationFn: async (credential: { email: string }) => {
      try {
        console.log(credential);
        const response = await sendResetPass(credential);
        if (response.status === 200) {
          toast("Check your email for further action.", {
            type: "success",
            autoClose: 2000,
            position: "top-center",
          });
          router.push("/auth/login");
        } else if (response.status === 204) {
          toast("Such email doesn't exist.", {
            type: "error",
            autoClose: 2000,
            position: "top-center",
          });
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

  const handleRestorePassword = () => {
    mutate({ email: restoreEmail });
  };

  return (
    <PageContainer className="gap-[30px]">
      <LogoTitle />
      <div className="flex flex-col gap-5 max-w-[306px] w-full justify-center">
        <InputField
          placeholder={"Електронна адреса"}
          onChange={(e) => setRestoreEmail(e.target.value)}
        />
      </div>
      <BlueButton onClick={handleRestorePassword}>Відновити пароль</BlueButton>
      <AuthLink
        href="/auth/register"
        text="Зареєструватись"
        subText="Немає аккаунту? "
      />
      <AuthLink href="/auth/login" text="Увійти" subText="Вже є аккаунт? " />
    </PageContainer>
  );
};

export default SendResetPasswordEmail;
