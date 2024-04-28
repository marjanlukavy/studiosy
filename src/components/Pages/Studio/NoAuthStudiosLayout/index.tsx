import React, { useEffect } from "react";
import { StudioType } from "@/types/studio";
import Studio from "@/components/Pages/Studio/NoAuthStudiosLayout/Studio";
import useCityStore, { City } from "@/stores/city.store";
// import useNoAuthStudiosStore from "@/stores/noAuthStudios.store";
import { getStudiosByCityId } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

const NoAuthStudiosLayout = () => {
  const currentCity: City = useCityStore((state) => state.currentCity);
  // const setStudios = useNoAuthStudiosStore((state) => state.setStudios);
  // const setStudios = useNoAuthStudiosStore((state) => state.setStudios);

  const { isPending, error, data } = useQuery({
    queryKey: [currentCity.id],
    queryFn: async () => {
      try {
        const response = await getStudiosByCityId(currentCity.id);
        return response.data as StudioType[];
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    },
  });

  // data?.filter((el) => console.log("useQuery data:", el.postalAddress.cityId));

  return (
    <>
      {data?.map((studio) => (
        <Studio key={studio.id} studioData={studio} />
      ))}
    </>
  );
};

export default NoAuthStudiosLayout;
