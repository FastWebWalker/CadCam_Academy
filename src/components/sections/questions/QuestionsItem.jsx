import React, { useState } from "react";
import NavigationArrow from "../../UI/NavigationArrow";
import Description from "../../UI/Description"; // Add this line to import the Description component

const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="w-full mb-2 bg-white overflow-hidden transition-all border-b-[0.5px] border-[#111111] border-opacity-90 duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className="flex items-center justify-between pb-[18px] mt-[22px] cursor-pointer transition-colors duration-300 "
        onClick={toggleAccordion}>
        <h3 className="text-[24px] font-normal transition-colors duration-300">
          {question}
        </h3>
        <div className="text-gray-500">
          <NavigationArrow
            className={`transform transition-transform duration-300 ease-out ${
              isOpen ? "rotate-[90deg]" : "rotate-[270deg]"
            }`}
            forceHover={isHovered}
            startColor="#111111"
            endColor="#111111"
            size={40}
            padding={18}
          />
        </div>
      </div>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}>
        <div className="overflow-hidden">
          <div
            className={`max-w-[1207px] pb-4 transform transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}>
            <Description
              className="
            text-[16px]">
              {answer}
            </Description>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
