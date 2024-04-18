import BackgroundImage from "@/components/UI/BackgroundImage";
import Image from "next/image";
import imageSrc from "/public/images/auth/background.png";
import LoginForm from "@/components/Pages/Auth/LoginForm";

const Login = () => {
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
      <LoginForm />
    </BackgroundImage>
  );
};

export default Login;
