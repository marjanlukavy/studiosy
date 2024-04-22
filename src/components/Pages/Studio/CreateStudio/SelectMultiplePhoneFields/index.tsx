import React from "react";
import FormField from "./FormField";
import { AddSVGIcon } from "@/components/UI/SVGIcons";
import useStudioStore, { StudioItem } from "@/stores/studio.store";

type PhoneNumberField = "name" | "phoneNumber";

const SelectMultiplePhoneFields = () => {
  const studioItem: StudioItem = useStudioStore((state) => state.studioItem);
  const addPhoneNumber: (phoneNumber: {
    name: string;
    phoneNumber: string;
  }) => void = useStudioStore((state) => state.addPhoneNumber);

  const handleAddField = () => {
    addPhoneNumber({ name: "", phoneNumber: "" });
  };

  const handleRemoveField = (index: number): void => {
    const updatedPhoneNumbers: { name: string; phoneNumber: string }[] = [
      ...studioItem.phoneNumbers,
    ];
    updatedPhoneNumbers.splice(index, 1);
    useStudioStore.setState({
      studioItem: { ...studioItem, phoneNumbers: updatedPhoneNumbers },
    });
  };

  const handleFieldChange = (
    index: number,
    key: string,
    value: string
  ): void => {
    const updatedPhoneNumbers: { name: string; phoneNumber: string }[] = [
      ...studioItem.phoneNumbers,
    ];
    if (key === "name" || key === "phoneNumber") {
      updatedPhoneNumbers[index][key as PhoneNumberField] = value;
      useStudioStore.setState({
        studioItem: { ...studioItem, phoneNumbers: updatedPhoneNumbers },
      });
    }
  };

  return (
    <div className="border-gradient-br-grey-blue-900 border-transparent border-solid border rounded-lg p-5 w-full max-w-[575px] mt-5">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-gray text-[20px] leading-[23.44px] font-extralight">
          Телефон
        </h3>
        <button onClick={handleAddField}>
          <AddSVGIcon />
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {studioItem.phoneNumbers.map((phoneNumber, index) => (
          <FormField
            key={index}
            index={index}
            field={phoneNumber}
            handleFieldChange={handleFieldChange}
            handleRemoveField={handleRemoveField}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectMultiplePhoneFields;
