// ManageStages.tsx
import React from "react";

import { PlusIconSVG } from "@/components/UI/SVGIcons";
import StudioHeader from "@/components/UI/StudioHeader";
import useUploadStore from "@/stores/stages.store";
import IterateUpload from "@/components/Pages/Studio/MyStudio/ManageStages/IterateUplaod";
import InputField from "@/components/UI/InputField";
import TextArea from "@/components/UI/FormElements/TextArea";
import BlueButton from "@/components/UI/Buttons/BlueButton";
import StudioWarning from "@/components/UI/StudioWarning";

const ManageStages = () => {
  const { stages, activeIndex, setActiveIndex, addStage, removeStage } =
    useUploadStore();

  const handleAddUpload = () => {
    addStage(); // Create a new stage
    setActiveIndex(stages.length - 1); // Set the active index to the new stage
  };

  return (
    <div className="flex flex-col gap-1 w-full justify-center items-center">
      <div className="centered-container flex pl-[15px] flex-col pt-[10px] pb-[37px] relative w-full">
        <StudioHeader />
        <div>
          <IterateUpload />
        </div>
        <div className="mt-[22px] flex flex-col gap-[35px]">
          <div className="flex gap-[15px] justify-center">
            {stages.map((_, index) => (
              <button
                key={index}
                className={`font-extrabold text-[20px] leading-[23.44px] text-white ${
                  index === activeIndex
                    ? "bg-blue"
                    : "bg-transparent border-4 border-blue"
                } rounded-lg overflow-hidden py-1 px-[40.5px]`}
                onClick={() => setActiveIndex(index)}
              >
                Stage {index + 1}
              </button>
            ))}
            <button
              className="font-extrabold text-[20px] leading-[23.44px] text-white bg-transparent border-4 border-blue rounded-lg overflow-hidden py-1 px-[40.5px]"
              onClick={handleAddUpload}
            >
              <PlusIconSVG size={25} />
            </button>
          </div>
          <span className="text-center font-robot font-extralight text-[10px] leading-[11.72px] text-gray">
            * фотографії, позначені зірочкою, будуть додані до ваших студійних
            фото обкладинок
          </span>
        </div>
        <div className="max-w-[575px] w-full mx-auto flex flex-col gap-[10px] mt-[9px] justify-center">
          <InputField placeholder={"Ціна"} className="max-w-full w-full" />
          <TextArea
            placeholder={"Опис"}
            className="max-w-full w-full min-h-[120px]"
          />
          <BlueButton className="items-center mt-5">Зберегти</BlueButton>
        </div>
        <StudioWarning />
      </div>
    </div>
  );
};

export default ManageStages;
