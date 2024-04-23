import { PlusIconSVG } from "@/components/UI/SVGIcons";
import Link from "next/link";
import React from "react";

const CreateStudioComponent = () => {
  return (
    <div className="centered-container flex items-center flex-col pt-10 relative">
      <span className="text-black text-[20px] leading-[23px]">
        Додати свою студію
      </span>
      <Link href={"/studio/create-studio"}>
        <PlusIconSVG className="absolute inset-0 m-auto hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" />
      </Link>
    </div>
  );
};

export default CreateStudioComponent;
