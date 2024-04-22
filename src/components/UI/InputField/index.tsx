import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";

interface InputFieldsProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const InputField = ({ placeholder, className, ...rest }: InputFieldsProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNames(
        "border-gradient-br-grey-blue-900 border-transparent border-solid border py-[11px] max-w-[306px] w-full text-center text-[20px] leading-[23.44px] font-light placeholder:font-extralight text-dark placeholder:text-gray font-roboto rounded-lg",
        className
      )}
      {...rest}
    />
  );
};

export default InputField;
