import BackgroundImage from "@/components/UI/BackgroundImage";
import Image from "next/image";
import imageSrc from "/public/images/auth/background.png";
import RegisterForm from "@/components/Pages/Auth/RegisterForm";

const Registration = () => {
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
      <RegisterForm />
    </BackgroundImage>
  );
};

export default Registration;
