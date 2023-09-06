import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const SelectAccount = () => {
  const options = [
    "user1@blazpay",
    "user2@blazpay",
    "user3@blazpay",
    "user4@blazpay",
    "user6@blazpay",
    "user7@blazpay",
  ]; // Define your dropdown options here
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("user1@blazpay");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };
  return (
    <div className="flex items-center justify-center w-full gap-2 p-2 border-2 border-orange-700 rounded-lg">
      <h1 className="flex-1">{selectedOption}</h1>
      <div className="flex items-center justify-center flex-1 h-5 p-2 text-xs border border-orange-700 rounded-lg">
        Etherium
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 mt-2 w-full bg-white border border-orange-700 rounded-lg shadow-md text-black`}
      >
        {options.map((option) => (
          <div
            key={option}
            className="p-2 text-black cursor-pointer hover:bg-gray-100"
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <FiChevronDown
        className={`flex-1 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        onClick={toggleDropdown}
      />
    </div>
  );
};

export default SelectAccount;
