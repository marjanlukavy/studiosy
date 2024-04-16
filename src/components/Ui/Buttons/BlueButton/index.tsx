import React, { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface BlueButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const BlueButton = ({ children, className, ...rest }: BlueButtonProps) => {
  return (
    <button
      className={classNames(
        "bg-blue font-medium text-[20px] leading-[23.44px] text-white py-[11px] px-[72px] rounded-lg",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default BlueButton;
