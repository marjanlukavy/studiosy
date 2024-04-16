import React from "react";
import Link from "next/link";

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
    <Link href={href} className="font-robot font-medium text-dark-link">
      {subTextItem}
      {text}
    </Link>
  );
};

export default AuthLink;
