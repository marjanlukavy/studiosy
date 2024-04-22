import useImageStore from "@/stores/studio.store";
import Image from "next/image";
import React, { ChangeEvent } from "react";

const AddLogo = () => {
  const studioItem = useImageStore((state) => state.studioItem);
  const setImage = useImageStore((state) => state.setImage);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label htmlFor="uploadInput" className="cursor-pointer">
      <div className="rounded-full border border-solid border-white inner-shadow flex flex-col items-center justify-center text-center size-[126px] relative overflow-hidden hover:scale-110 transition-transform duration-300">
        {studioItem.image ? (
          <Image
            src={studioItem.image}
            alt="Selected Image"
            className="object-cover"
            width={126}
            height={126}
          />
        ) : (
          <>
            <span className="text-[20px] leading-[23.44px] text-gray font-robot font-extralight">
              Лого
            </span>
            <span className="text-[10px] text-gray leading-[11.72px] font-robot font-extralight">
              (натисніть для додавання)
            </span>
          </>
        )}
        <input
          type="file"
          id="uploadInput"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </label>
  );
};

export default AddLogo;
