import LogoTitle from "@/components/UI/LogoTitle";
import SelectCountry from "@/components/UI/Modals/SelectCountry";
import {
  LeftArrowIconSVG,
  LocationIconSVG,
  SelectIconSVG,
  UserProfileIconSVG,
} from "@/components/UI/SVGIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const isCreateStudioPathname =
    pathname === "/studio/create-studio" ||
    pathname === "/studio/edit-studio" ||
    pathname === "/studio/manage-stages";

  return (
    <header className="px-[100px] pt-[37px] pb-[20px] flex items-center justify-between w-full">
      {isCreateStudioPathname ? (
        <Link
          href={"/studio/my-studio"}
          className="flex items-center gap-[5px] font-robot leading-[18.75px] text-black hover:underline"
        >
          <LeftArrowIconSVG />
          Назад
        </Link>
      ) : null}

      {pathname === "/" ? <SelectCountry /> : null}

      <div className="flex items-center justify-center m-auto">
        <LogoTitle />
      </div>

      <div className="flex items-center gap-5">
        <LocationIconSVG />
        <UserProfileIconSVG />
      </div>
    </header>
  );
};

export default Header;
