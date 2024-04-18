import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface AuthLinkProps {
  href: string;
  text: string;
  subText?: string;
}

const AuthLink = ({ href, text, subText }: AuthLinkProps) => {
  const subTextItem = subText ? (
    <span className="font-robot font-extralight text-black">{subText}</span>
  ) : null;

  return (
    <Link
      href={href}
      className={classNames(
        "font-robot font-medium text-dark-link hover:text-blue transition-all duration-200 ease-in-out focus:outline-none focus:text-blue",
        {
          "hover:underline": !subText,
        }
      )}
    >
      {subTextItem}
      {text}
    </Link>
  );
};

export default AuthLink;
