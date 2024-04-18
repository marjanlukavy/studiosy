import BackgroundImage from "@/components/UI/BackgroundImage";
import Image from "next/image";
import imageSrc from "/public/images/auth/background.jpg";
import BlueButton from "@/components/UI/Buttons/BlueButton";
import InputFields from "@/components/UI/InputFields";
import LogoTitle from "@/components/UI/LogoTitle";
import PageContainer from "@/components/Pages/Auth/PageContainer";
import AuthLink from "@/components/Pages/Auth/PageContainer/AuthLink";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/auth.store";

const RestoreEmail = () => {
  const router = useRouter();
  const setRestorePassword = useAuthStore((state) => state.setRestorePassword);

  const handleRestorePassword = () => {
    setRestorePassword(true);
    router.push("/auth/login");
  };
  return (
    <BackgroundImage
      image={
        <Image
          src={imageSrc}
          alt="Image Alt Text"
          className="object-cover object-center"
          fill
        />
      }
    >
      <PageContainer className="gap-[30px]">
        <LogoTitle />
        <div className="flex flex-col gap-5 max-w-[306px] w-full justify-center">
          <InputFields placeholder={"Електронна адреса"} />
        </div>
        <BlueButton onClick={handleRestorePassword}>
          Відновити пароль
        </BlueButton>
        <AuthLink
          href="/auth/register"
          text="Зареєструватись"
          subText="Немає аккаунту? "
        />
        <AuthLink href="/auth/login" text="Увійти" subText="Вже є аккаунт? " />
      </PageContainer>
    </BackgroundImage>
  );
};

export default RestoreEmail;
