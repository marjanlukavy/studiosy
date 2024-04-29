import React, { useEffect, useRef, useState } from "react";
import { SelectIconSVG } from "@/components/UI/SVGIcons";
import useCityStore, { City } from "@/stores/city.store";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useQuery } from "@tanstack/react-query";
import { getAllCities } from "@/server/actions";

const SelectCountry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentCity = useCityStore((state) => state.currentCity);
  const setCurrentCity = useCityStore((state) => state.setCurrentCity);

  const ref = useRef(null);

  const { isPending, error, data } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      try {
        const response = await getAllCities();
        return response.data as City[];
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    },
  });

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (city: City) => {
    setCurrentCity(city);
    setIsOpen(false);
  };

  return (
    <div className="relative z-[2]" ref={ref}>
      <div
        className="flex items-center gap-[10px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <SelectIconSVG />
        <span className="font-robot text-gray text-[40px] leading-[46.88px]">
          {currentCity.name}
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg overflow-y-scroll max-h-[300px]">
          <ul>
            {data?.map((city) => (
              <li
                key={city.id}
                className="py-2 px-4 cursor-pointer transition duration-200 hover:bg-black hover:text-white"
                onClick={() => handleOptionClick(city)}
              >
                {city.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectCountry;
