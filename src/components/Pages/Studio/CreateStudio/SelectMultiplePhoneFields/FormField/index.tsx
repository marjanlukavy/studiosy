import InputField from "@/components/UI/InputField";
import { TrashIconSVG } from "@/components/UI/SVGIcons";
import React from "react";

interface FormFieldProps {
  index: number;
  field: { name: string; phoneNumber: string };
  handleFieldChange: (index: number, key: string, value: string) => void;
  handleRemoveField: (index: number) => void;
}

const FormField = ({
  index,
  field,
  handleFieldChange,
  handleRemoveField,
}: FormFieldProps) => {
  return (
    <div key={index} className="flex gap-[30px] w-full items-center mt-[11px]">
      <div className="flex gap-[10px] w-full">
        <InputField
          placeholder={"Назва"}
          className="max-w-[156px]"
          value={field.name}
          onChange={(e) => handleFieldChange(index, "name", e.target.value)}
        />
        <InputField
          placeholder={"Номер телефону"}
          className="w-full"
          value={field.phoneNumber}
          onChange={(e) =>
            handleFieldChange(index, "phoneNumber", e.target.value)
          }
        />
      </div>
      <button onClick={() => handleRemoveField(index)}>
        <TrashIconSVG />
      </button>
    </div>
  );
};

export default FormField;
