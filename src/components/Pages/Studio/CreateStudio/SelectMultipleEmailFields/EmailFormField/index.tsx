import React from "react";
import InputField from "@/components/UI/InputField";
import { TrashIconSVG } from "@/components/UI/SVGIcons";

type EmailField = "name" | "email";

interface EmailFormFieldProps {
  index: number;
  field: { name: string; email: string };
  handleFieldChange: (index: number, key: EmailField, value: string) => void; // Adjust the type of 'key' parameter
  handleRemoveField: (index: number) => void;
}

const EmailFormField: React.FC<EmailFormFieldProps> = ({
  index,
  field,
  handleFieldChange,
  handleRemoveField,
}) => {
  return (
    <div key={index} className="flex gap-[30px] w-full items-center mt-[11px]">
      <div className="flex gap-[10px] w-full">
        <InputField
          placeholder={"Назва"}
          className="max-w-[156px]"
          value={field.name}
          onChange={(e) => handleFieldChange(index, "name", e.target.value)} // Adjust the type of 'key' parameter
        />
        <InputField
          placeholder={"Електронна пошта"}
          className="w-full"
          value={field.email}
          onChange={(e) => handleFieldChange(index, "email", e.target.value)} // Adjust the type of 'key' parameter
        />
      </div>
      <button onClick={() => handleRemoveField(index)}>
        <TrashIconSVG />
      </button>
    </div>
  );
};

export default EmailFormField;
