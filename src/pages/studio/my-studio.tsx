import CreateStudioComponent from "@/components/Pages/Studio/CreateStudio";
import CreateStageStudio from "@/components/Pages/Studio/MyStudio";
import AddMoreStudios from "@/components/UI/AddMoreStudios";
import BackgroundImage from "@/components/UI/BackgroundImage";
import { PlusIconSVG } from "@/components/UI/SVGIcons";
import Link from "next/link";
import React from "react";
import withAuth from "@/hocs/withAuth";
import { StudioType } from "@/types/studio";
import { getStudiosByCityId, getStudiosOwner } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

const MyStudio = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["ownerStudios"],
    queryFn: async () => {
      try {
        const response = await getStudiosOwner();
        return response.data as StudioType[];
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    },
  });

  const filteredDataByStages = data?.filter(
    (studio) => studio.stages.length > 0
  );

  if (data?.length === 0) {
    return <CreateStudioComponent />;
  }

  return (
    <div className="w-full flex flex-col gap-[30px]">
      {data?.map((studio) => {
        return <CreateStageStudio key={studio.id} studioData={studio} />;
      })}
      <AddMoreStudios />
    </div>
  );
};

export default withAuth(MyStudio);
