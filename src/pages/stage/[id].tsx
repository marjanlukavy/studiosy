import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import StudioHeader from "@/components/UI/StudioHeader";
import { StudioType } from "@/types/studio";
import { useQuery } from "@tanstack/react-query";
import { getStageById, getStudioById } from "@/server/actions";
import { useRouter } from "next/router";
import { StageType } from "@/types/stage";
import Link from "next/link";

const StageDetails = () => {
  const router = useRouter();
  const query = router.query as { id: string };

  const {
    isPending: stageIsPending,
    error: stageError,
    data: stageData,
  } = useQuery({
    queryKey: [query.id],
    queryFn: async () => {
      try {
        const response = await getStageById(query.id);
        return response.data as StageType;
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    },
  });

  const {
    isPending: studioIsPending,
    error: studioError,
    data: studioData,
  } = useQuery({
    queryKey: [stageData?.studioId],
    queryFn: async () => {
      try {
        const response = await getStudioById(stageData?.studioId || "");
        return response.data as StudioType;
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    },
  });

  const getStageIterableNumber = useCallback(() => {
    const index = studioData?.stages.findIndex((el) => el.id === query.id);
    return index !== -1 ? index : studioData?.stages.length;
  }, [query.id, studioData?.stages]);

  useEffect(() => {
    const stageNumber = getStageIterableNumber();
    if (typeof stageNumber !== "undefined" && !isNaN(stageNumber)) {
      setCurrentStage(stageNumber);
    }
  }, [getStageIterableNumber]);

  const [currentStage, setCurrentStage] = useState(0);

  const stageChangeHandler = (index: number) => {
    setCurrentStage(index);
  };

  if (!studioData) {
    return null;
  }

  return (
    <div className="flex gap-1 w-full justify-center items-center">
      <div className="centered-container flex px-6 pb-5 flex-col pt-[10px] relative w-full">
        <StudioHeader studioData={studioData} />
        <div className="mt-4 flex gap-6 overflow-scroll">
          {stageData?.images.map((stageImage, index) => {
            return (
              <div
                className="relative size-[262px] rounded-[17px] overflow-hidden shrink-0"
                key={stageImage.id}
              >
                <Image
                  // need to a add fallback photo
                  src={stageImage?.path || ""}
                  alt={stageImage?.id || "Stage Image"}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="flex gap-[10px]">
            {studioData?.stages.map((stage, index) => (
              <Link
                key={stage.id}
                className={`font-extrabold text-[20px] leading-[23.44px] text-white ${
                  index === currentStage
                    ? "bg-blue"
                    : "bg-transparent border-4 border-blue"
                } rounded-lg overflow-hidden py-[11px] px-[40.5px]`}
                onClick={() => stageChangeHandler(index)}
                href={`/stage/${stage.id}`}
              >
                Stage {index + 1}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center mt-[30px] gap-5">
            <span className="text-black font-roboto font-semibold leading-[47.21px] text-[40.29px]">
              {stageData?.cost} uah/h
            </span>
            <p className="text-gray font-normal font-roboto text-[24px] leading-[28.13px] text-center">
              {stageData?.description}
            </p>
          </div>
          <div className="bg-gray h-[1px] w-full" />
          <div className="flex items-center justify-center gap-5 max-w-[715px] flex-wrap m-auto">
            {studioData?.tags.map((tag) => (
              <div className="px-2 py-1" key={tag.id}>
                <span className="font-roboto text-[16px] leading-[18.75px] text-gray">
                  #{tag?.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageDetails;
