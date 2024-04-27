import React, { useState } from "react";
import { SelectIconSVG } from "@/components/UI/SVGIcons";

const SelectCountry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option: string) => {
    console.log("Selected option:", option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-[10px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <SelectIconSVG />
        <span className="font-robot text-gray text-[40px] leading-[46.88px]">
          Kyiv
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg">
          <ul>
            <li
              className="py-2 px-4 cursor-pointer transition duration-200 hover:bg-black hover:text-white rounded-t-lg"
              onClick={() => handleOptionClick("Option 1")}
            >
              Option 1
            </li>
            <li
              className="py-2 px-4 cursor-pointer transition duration-200 hover:bg-black hover:text-white"
              onClick={() => handleOptionClick("Option 2")}
            >
              Option 2
            </li>
            <li
              className="py-2 px-4 cursor-pointer transition duration-200 hover:bg-black hover:text-white rounded-b-lg"
              onClick={() => handleOptionClick("Option 3")}
            >
              Option 3
            </li>
            {/* Add more options as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectCountry;
