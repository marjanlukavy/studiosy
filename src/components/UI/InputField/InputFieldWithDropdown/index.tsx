import React, { useState } from "react";
import { PlusIconSVG } from "@/components/UI/SVGIcons";
import useStudioStore from "@/stores/studio.store";

interface InputFieldWithDropdownProps {
  placeholder: string;
  name: string;
}

const fakeCountries = [
  "Ukraine",
  "United States",
  "Canada",
  "Germany",
  "France",
  "United Kingdom",
  "Italy",
  "Spain",
];

const InputFieldWithDropdown: React.FC<InputFieldWithDropdownProps> = ({
  placeholder,
  name,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [matchedCountries, setMatchedCountries] = useState<string[]>([]);

  const studioItem = useStudioStore((state) => state.studioItem);
  const setStudioItem = useStudioStore((state) => state.setStudioItem);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const matched = fakeCountries.filter((country) =>
      country.toLowerCase().includes(newValue.toLowerCase())
    );
    setMatchedCountries(matched);
    setIsDropdownOpen(true);
  };

  const handleSelectItem = (selectedItem: string) => {
    setInputValue(selectedItem);
    setStudioItem(name, selectedItem);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative max-w-[575px]">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        name={name}
        onChange={handleChange}
        className="border-gradient-br-grey-blue-900 border-transparent border-solid border py-[11px] w-full text-center text-[20px] leading-[23.44px] font-light placeholder:font-extralight text-dark placeholder:text-gray font-roboto rounded-lg"
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center pr-3 z-[2] justify-center w-10 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none ml-auto"
        onClick={toggleDropdown}
      >
        <PlusIconSVG />
      </button>
      <div className="absolute top-[50px] right-0 flex items-center pr-3 w-full ">
        {isDropdownOpen && matchedCountries.length > 0 && (
          <div className="absolute top-full right-0 mt-1 w-full rounded-md shadow-lg !bg-white border-gradient-br-grey-blue-900">
            <ul>
              {matchedCountries.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
                  onClick={() => handleSelectItem(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputFieldWithDropdown;
