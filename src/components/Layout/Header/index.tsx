import LogoTitle from "@/components/UI/LogoTitle";
import { LocationIconSVG, UserProfileIconSVG } from "@/components/UI/SVGIcons";
import React from "react";

const Header = () => {
  return (
    <header className="pr-[100px] pl-[58px] mt-[37px] mx-auto flex items-center justify-between">
      <div></div>
      <LogoTitle />
      <div className="flex items-center gap-5">
        <LocationIconSVG />
        <UserProfileIconSVG />
      </div>
    </header>
  );
};

export default Header;
