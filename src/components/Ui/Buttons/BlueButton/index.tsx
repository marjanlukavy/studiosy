import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";
import classNames from "classnames";

interface BlueButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

const BlueButton = ({
  children,
  className,
  loading,
  ...rest
}: BlueButtonProps) => {
  return (
    <button
      className={classNames(
        "w-full max-w-[306px] bg-blue hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue focus:ring-opacity-50 text-white py-2 px-4 rounded-lg transition-all duration-200 ease-in-out",
        { "opacity-50 cursor-not-allowed": loading },
        className
      )}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <FaSpinner className="animate-spin inline-block mr-2" />
      ) : null}
      {children}
    </button>
  );
};

export default BlueButton;
