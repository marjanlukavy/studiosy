import Image from "next/image";
import React from "react";
import { LinkIconSVG, PhoneIconSVG, SMSIconSVG } from "../SVGIcons";

const StudioHeader = () => {
  return (
    <div className="flex justify-between items-center">
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
      <div className="flex gap-5">
        <LinkIconSVG />
        <SMSIconSVG />
        <PhoneIconSVG />
      </div>
    </div>
  );
};

export default StudioHeader;
