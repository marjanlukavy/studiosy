import CreateStudioComponent from "@/components/Pages/Studio/CreateStudio";
import CreateStageStudio from "@/components/Pages/Studio/MyStudio";
import BackgroundImage from "@/components/UI/BackgroundImage";
import { PlusIconSVG } from "@/components/UI/SVGIcons";
import Link from "next/link";
import React from "react";

const MyStudio = () => {
  const emptyStudio = false;
  return <>{emptyStudio ? <CreateStudioComponent /> : <CreateStageStudio />}</>;
};

export default MyStudio;
