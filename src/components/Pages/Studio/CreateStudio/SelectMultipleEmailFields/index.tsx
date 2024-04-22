import React from "react";

import { AddSVGIcon } from "@/components/UI/SVGIcons";
import useStudioStore, { StudioItem } from "@/stores/studio.store";
import EmailFormField from "./EmailFormField";

type EmailField = "name" | "email";

const SelectMultipleEmailFields = () => {
  const studioItem: StudioItem = useStudioStore((state) => state.studioItem);
  const addEmail: (email: { name: string; email: string }) => void =
    useStudioStore((state) => state.addEmail);

  const handleAddField = () => {
    addEmail({ name: "", email: "" });
  };

  const handleRemoveField = (index: number): void => {
    const updatedEmails: { name: string; email: string }[] = [
      ...studioItem.emails,
    ];
    updatedEmails.splice(index, 1);
    useStudioStore.setState({
      studioItem: { ...studioItem, emails: updatedEmails },
    });
  };

  const handleFieldChange = (
    index: number,
    key: EmailField,
    value: string
  ): void => {
    const updatedEmails: { name: string; email: string }[] = [
      ...studioItem.emails,
    ];
    updatedEmails[index][key] = value;
    useStudioStore.setState({
      studioItem: { ...studioItem, emails: updatedEmails },
    });
  };

  return (
    <div className="border-gradient-br-grey-blue-900 border-transparent border-solid border rounded-lg p-5 w-full max-w-[575px] mt-5">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-gray text-[20px] leading-[23.44px] font-extralight">
          Електронна пошта
        </h3>
        <button onClick={handleAddField}>
          <AddSVGIcon />
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {studioItem.emails.map((email, index) => (
          <EmailFormField
            key={index}
            index={index}
            field={email}
            handleFieldChange={handleFieldChange}
            handleRemoveField={handleRemoveField}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectMultipleEmailFields;
