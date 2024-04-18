import Image from "next/image";
import React from "react";

const LogoTitle = () => {
  return (
    <Image
      src={"/images/logo.svg"}
      alt={"Logo"}
      width={329}
      height={121}
      quality={80}
    />
  );
};

export default LogoTitle;
