import { EditIconSVG, PlusIconSVG } from "@/components/UI/SVGIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreateStageStudio = () => {
  return (
    <div className="flex gap-1 w-full justify-center items-center">
      <div className="centered-container flex pl-[15px] flex-col pt-[10px] relative w-full">
        <div className="flex gap-[11px]">
          <div className="inner-shadow relative size-[66px] rounded-full">
            <Image
              src={""}
              alt={""}
              fill
              className="rounded-full overflow-hidden"
            />
          </div>
          <div>
            <h3 className="font-robot text-[32px] font-light leading-[37.5px] text-black">
              Studio 1
            </h3>
            <span className="text-[18px] leading-[21.09px] text-gray font-roboto font-light">
              Kyiv, Very Famous Person str., 18/94
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Link href={"/studio/create-studio"}>
            <PlusIconSVG className="hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" />
          </Link>
          <p className="font-robot font-extralight text-[20px] leading-[26px] text-black mt-[25px] max-w-[312px] text-center">
            Тут будуть обкладинки фотостудії. Вам потрібно додати стейджи.
          </p>
        </div>
      </div>
      <Link href={"/studio/edit-studio"}>
        <EditIconSVG />
      </Link>
    </div>
  );
};

export default CreateStageStudio;
