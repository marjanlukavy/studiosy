import Image from "next/image";
import React from "react";
import { LinkIconSVG, PhoneIconSVG, SMSIconSVG } from "../SVGIcons";
import { StudioType } from "@/types/studio";
import useCityStore, { City } from "@/stores/city.store";

interface StudioHeaderPropsType {
  studioData: StudioType;
}

const StudioHeader = ({ studioData }: StudioHeaderPropsType) => {
  const currentCity: City = useCityStore((state) => state.currentCity);

  if (!studioData) {
    return null;
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[11px]">
        <div className="inner-shadow relative size-[66px] rounded-full">
          <Image
            // need to add a fallback photo
            src={studioData.logo.path}
            alt={studioData.logo.id}
            fill
            className="rounded-full overflow-hidden"
          />
        </div>
        <div>
          <h3 className="font-robot text-[32px] font-light leading-[37.5px] text-black">
            {studioData.name}
          </h3>
          <span className="text-[18px] leading-[21.09px] text-gray font-roboto font-light">
            {currentCity.name}, {studioData.postalAddress.street}
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
