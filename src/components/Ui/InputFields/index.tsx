import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";

interface InputFieldsProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const InputFields = ({ placeholder, className, ...rest }: InputFieldsProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNames(
        "py-[11px] px-[65px] text-[20px] leading-[23.44px] text-gray bg-inputBackgroundOpacity font-extralight font-roboto border border-[#ABABAB] border-b border-b-[#FFFFFF] rounded-lg",
        className
      )}
      {...rest}
    />
  );
};

export default InputFields;
