import Image from "next/image";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import classNames, { Argument } from "classnames";
import imageSrc from "/public/images/auth/background.png";
import { usePathname, useRouter } from "next/navigation";

interface BackgroundImageProps {
  children?: ReactNode;
  className?: Argument;
}

type BackgroundImageAdditionalProps = Omit<
  ComponentPropsWithoutRef<"div">,
  keyof BackgroundImageProps
>;

export default function BackgroundImage({
  children,
  className,
  ...props
}: BackgroundImageProps & BackgroundImageAdditionalProps) {
  const pathname = usePathname();

  console.log(pathname);

  const conditionalClass = pathname === "/studio/my-studio" ? "h-screen" : "";

  return (
    <div
      className={classNames("w-full relative", conditionalClass, className)}
      {...props}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt="Image Alt Text"
          className="object-center"
          fill
        />
      </div>
      <div className="z-10 flex flex-col justify-center items-center  w-full">
        {children}
      </div>
    </div>
  );
}
