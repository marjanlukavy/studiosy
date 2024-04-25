import BlueButton from "@/components/UI/Buttons/BlueButton";
import LogoTitle from "@/components/UI/LogoTitle";
import PageContainer from "@/components/Pages/Auth/PageContainer";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import InputField from "@/components/UI/InputField";
import useAuthStore from "@/stores/auth.store";
import { confirmResetPass, logUser } from "@/server/actions";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ResetAndVerifyToken } from "@/types/auth";

const ConfirmResetPasswordEmail = () => {
  const password = useAuthStore((state) => state.resetPassword);
  const confirmPassword = useAuthStore((state) => state.confirmResetPassword);
  const setPassword = useAuthStore((state) => state.setResetPassword);
  const setConfirmPassword = useAuthStore(
    (state) => state.setConfirmResetPassword
  );

  const router = useRouter();

  const { token } = router.query;

  const tokenString = { token: token?.toString() } as ResetAndVerifyToken;

  useEffect(() => {
    const confirmPassword = async () => {
      try {
        const response = await confirmResetPass({ token: tokenString });

        if (response.status === 200) {
          console.log("Reset Password Token verified successfully");
        }
      } catch (error) {
        console.error("Error verifying Reset Password Token:", error);
        return;
      }
    };

    confirmPassword();
  }, [token]);

  const { mutate } = useMutation({
    mutationFn: async (credentials: {
      token: ResetAndVerifyToken;
      password: string;
    }) => {
      try {
        const response = await confirmResetPass(credentials);
        if (response.status === 200) {
          toast("Successfully changed password.", {
            type: "success",
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

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      toast("Passwords do not match!", {
        type: "error",
        autoClose: 2000,
        position: "top-center",
      });
      return;
    }

    mutate({ token: tokenString, password: password });
  };

  return (
    <PageContainer className="gap-[30px]">
      <LogoTitle />
      <div className="flex flex-col gap-5 max-w-[306px] w-full">
        <InputField
          placeholder={"Новий пароль"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          placeholder={"Підтвердити новий пароль"}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <BlueButton onClick={handleResetPassword}>Оновити</BlueButton>
    </PageContainer>
  );
};

export default ConfirmResetPasswordEmail;
