import React from "react";
import StudioHeader from "@/components/UI/StudioHeader";
import Link from "next/link";
import Image from "next/image";
import { StudioType } from "@/types/studio";

interface StudioPropsType {
  studioData: StudioType;
}

const Studio = ({ studioData }: StudioPropsType) => {
  return (
    <div className="flex gap-1 w-full justify-center items-center">
      <div className="centered-container flex px-6 flex-col pt-[10px] relative w-full">
        <StudioHeader studioData={studioData} />

        <div className="mt-4 flex gap-6 overflow-scroll">
          {studioData.stages.map((stage, index) => {
            return (
              <Link
                href={`/stage/${stage.id}`}
                className="relative size-[262px] rounded-[17px] overflow-hidden shrink-0"
                key={stage.id}
              >
                <Image
                  // need to a add fallback photo
                  // if on studio click --> studio - stages page open
                  // src={studioData.covers[index]?.path || ""}
                  // alt={studioData.covers[index]?.id || "Stage Photo"}
                  // if on stage click ---> studio - stages page open
                  src={stage.images[0]?.path || ""}
                  alt={stage.images[0]?.id || "Stage Photo"}
                  fill
                  className="object-cover"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Studio;
