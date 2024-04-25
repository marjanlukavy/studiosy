import BlueButton from "@/components/UI/Buttons/BlueButton";
import LogoTitle from "@/components/UI/LogoTitle";
import PageContainer from "@/components/Pages/Auth/PageContainer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { confirmVerify } from "@/server/actions";
import { ResetAndVerifyToken } from "@/types/auth";

const ConfirmVerifyNewAccountEmail = () => {
  const router = useRouter();

  const { token } = router.query;

  const tokenString = { token: token?.toString() } as ResetAndVerifyToken;

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await confirmVerify({
          token: tokenString,
        });

        if (response.status === 200) {
          console.log("Email verified successfully");
        }
      } catch (error) {
        console.error("Error verifying email:", error);
        return;
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <PageContainer className="gap-[30px]">
      <LogoTitle />
      <p className="text-black font-extralight leading-[140%] max-w-[358px] text-center mb-[49px] mt-[52px]">
        Ви успішно пройшли верифікацію
      </p>
      <BlueButton onClick={() => router.replace("/auth/login")}>
        Увійти
      </BlueButton>
    </PageContainer>
  );
};

export default ConfirmVerifyNewAccountEmail;
