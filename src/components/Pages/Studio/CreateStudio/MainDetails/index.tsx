import React, { ChangeEvent } from "react";
import InputField from "@/components/UI/InputField";
import TextArea from "@/components/UI/FormElements/TextArea";
import useStudioStore from "@/stores/studio.store";

const MainDetails = () => {
  const studioItem = useStudioStore((state) => state.studioItem);
  const setStudioItem = useStudioStore((state) => state.setStudioItem);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setStudioItem(field, e.target.value);
  };
  console.log(studioItem);

  return (
    <div className="mt-5 w-full text-center">
      <div className="w-full flex flex-col gap-[10px] max-w-[575px] m-auto">
        <InputField
          placeholder={"Ім'я"}
          className="max-w-[575px]"
          value={studioItem.name}
          onChange={(e) => handleChange(e, "name")}
        />
        <span className="font-robot text-[16px] leading-[18.75px] text-dark">
          Зверніть увагу, назву студії{" "}
          <span className="font-semibold ">не можна буде змінити</span>
        </span>
      </div>
      <div className="mt-10 flex flex-col gap-5 max-w-[575px] m-auto">
        <InputField
          placeholder={"Посилання на сайт"}
          className="max-w-[575px]"
          value={studioItem.website}
          onChange={(e) => handleChange(e, "website")}
        />
        <div className="flex gap-[17px]">
          <InputField
            placeholder={"Довжина"}
            className="max-w-[575px]"
            value={studioItem.length}
            onChange={(e) => handleChange(e, "length")}
          />
          <InputField
            placeholder={"Ширина"}
            className="max-w-[575px]"
            value={studioItem.width}
            onChange={(e) => handleChange(e, "width")}
          />
        </div>
        <TextArea
          placeholder={"Теги"}
          value={studioItem.tags.join(" ")}
          onChange={(e) => handleChange(e, "tags")}
        />
      </div>
    </div>
  );
};

export default MainDetails;
