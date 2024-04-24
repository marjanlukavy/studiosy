import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoTitle = () => {
  const userLoggedIn = true;
  const redirectTo = userLoggedIn ? "/studio/my-studio" : "/";
  return (
    <Link href={redirectTo}>
      <Image
        src={"/images/logo.svg"}
        alt={"Logo"}
        width={329}
        height={121}
        quality={80}
        className="mx-auto"
      />
    </Link>
  );
};

export default LogoTitle;
