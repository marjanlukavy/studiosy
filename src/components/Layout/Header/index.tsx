import LogoTitle from "@/components/UI/LogoTitle";
import {
  LeftArrowIconSVG,
  LocationIconSVG,
  UserProfileIconSVG,
} from "@/components/UI/SVGIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const isCreateStudioPathname =
    pathname === "/studio/create-studio" || pathname === "/studio/edit-studio";

  return (
    <header className="pr-[100px] pl-[58px] mt-[37px] flex items-center justify-between w-full">
      {isCreateStudioPathname ? (
        <Link
          href={"/studio/my-studio"}
          className="flex items-center gap-[5px] font-robot leading-[18.75px] text-black hover:underline"
        >
          <LeftArrowIconSVG />
          Назад
        </Link>
      ) : null}

      <LogoTitle />
      <div className="flex items-center gap-5">
        <LocationIconSVG />
        <UserProfileIconSVG />
      </div>
    </header>
  );
};

export default Header;
