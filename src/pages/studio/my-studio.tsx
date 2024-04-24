import CreateStudioComponent from "@/components/Pages/Studio/CreateStudio";
import CreateStageStudio from "@/components/Pages/Studio/MyStudio";
import AddMoreStudios from "@/components/UI/AddMoreStudios";
import BackgroundImage from "@/components/UI/BackgroundImage";
import { PlusIconSVG } from "@/components/UI/SVGIcons";
import Link from "next/link";
import React from "react";

const MyStudio = () => {
  const emptyStudio = false;
  if (emptyStudio) {
    return <CreateStudioComponent />;
  }
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <CreateStageStudio />
      <AddMoreStudios />
    </div>
  );
};

export default MyStudio;
