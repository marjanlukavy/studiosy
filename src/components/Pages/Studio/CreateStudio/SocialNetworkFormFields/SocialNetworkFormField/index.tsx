import React from "react";
import InputField from "@/components/UI/InputField";
import { TrashIconSVG } from "@/components/UI/SVGIcons";

interface SocialNetworkFormFieldProps {
  index: number;
  field: { name: string; link: string };
  handleFieldChange: (
    index: number,
    key: SocialNetworkField,
    value: string
  ) => void;
  handleRemoveField: (index: number) => void;
}

type SocialNetworkField = "name" | "link";

const SocialNetworkFormField: React.FC<SocialNetworkFormFieldProps> = ({
  index,
  field,
  handleFieldChange,
  handleRemoveField,
}) => {
  return (
    <div key={index} className="flex gap-[30px] w-full items-center mt-[11px]">
      <div className="flex gap-[10px] w-full">
        <InputField
          placeholder={"Name"}
          className="max-w-[156px]"
          value={field.name}
          onChange={(e) => handleFieldChange(index, "name", e.target.value)}
        />
        <InputField
          placeholder={"Link"}
          className="w-full"
          value={field.link}
          onChange={(e) => handleFieldChange(index, "link", e.target.value)}
        />
      </div>
      <button onClick={() => handleRemoveField(index)}>
        <TrashIconSVG />
      </button>
    </div>
  );
};

export default SocialNetworkFormField;
