import BackgroundImage from "@/components/UI/BackgroundImage";
import Image from "next/image";
import imageSrc from "/public/images/auth/background.png";
import SendResetPasswordEmail from "@/components/Pages/Auth/RestoreForm/SendResetPasswordEmail";

const RestoreEmail = () => {
  return <SendResetPasswordEmail />;
};

export default RestoreEmail;
