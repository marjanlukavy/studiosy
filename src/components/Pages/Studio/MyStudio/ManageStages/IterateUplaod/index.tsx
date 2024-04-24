// IterateUpload.tsx
import React from "react";
import {
  FavoriteImageIconSVG,
  PlusIconSVG,
  RemoveImageIconSVG,
} from "@/components/UI/SVGIcons";

import Image from "next/image";
import useUploadStore from "@/stores/stages.store";

const MAX_COUNT = 5;

const IterateUpload: React.FC = () => {
  const {
    stages,
    activeIndex,
    setActiveIndex,
    addStage,
    removeStage,
    addImageToStage,
    removeImageFromStage,
  } = useUploadStore();

  const handleFileEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosenFiles = e.target.files;
    if (chosenFiles) {
      addImageToStage(activeIndex, chosenFiles);
    }
  };

  return (
    <div className="mt-[14px] overflow-x-auto">
      <input
        id="fileUpload"
        type="file"
        multiple
        className="hidden"
        accept="application/pdf, image/png"
        onChange={handleFileEvent}
        disabled={stages[activeIndex].uploadedFiles.length >= MAX_COUNT}
      />

      <div className="flex gap-5 overflow-scroll">
        {stages[activeIndex].uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="relative w-[360px] h-[310px] rounded-[17px] overflow-hidden hover:shadow-lg shrink-0"
          >
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="object-cover"
              fill
            />
            <div className="p-4 rounded-bl-[17px] bg-[#0000004e] absolute top-0 right-0 flex items-center justify-center">
              <button
                className=""
                onClick={() => removeImageFromStage(activeIndex, index)}
              >
                <RemoveImageIconSVG />
              </button>
            </div>
            <div className="p-4 rounded-bl-[17px] bg-[#0000004e] absolute bottom-0 left-0 flex items-center justify-center">
              <button className="" onClick={() => {}}>
                <FavoriteImageIconSVG />
              </button>
            </div>
          </div>
        ))}
        <div className="w-[360px] h-[310px] rounded-[17px] overflow-hidden border-2 border-gray flex items-center justify-center shrink-0">
          <label
            htmlFor="fileUpload"
            className="flex items-center justify-center flex-col cursor-pointer hover:opacity-80"
          >
            <PlusIconSVG className={""} />
            <span className="font-robot font-extralight text-black text-[20px] leading-[26px] mt-[17px] max-w-[184px] text-center ">
              Фото в форматі JPG до 1Mb
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default IterateUpload;
