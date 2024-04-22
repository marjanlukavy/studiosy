import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";

interface InputFieldsProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const TextArea = ({ placeholder, className, ...rest }: InputFieldsProps) => {
  return (
    <textarea
      className={classNames(
        "border-gradient-br-grey-blue-900 border-transparent border-solid border py-[11px] w-full text-[16px] leading-[18.75px] text-gray font-extralight font-roboto rounded-lg",
        className
      )}
    ></textarea>
  );
};

export default TextArea;
