import React from "react";
import Description from "../../UI/Description";

const ServicesItem = ({ number, title, description, image }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-[20px] sm:items-center items-start justify-between w-full border-t border-[#979797] py-8">
      {/* Text content container */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 md:gap-[18px] gap-[5px] items-start flex-grow">
        {/* Number */}
        <span className="md:text-[32px] text-[24px] text-[#111111] md:w-[5%]">
          {number.padStart(2, "0")}
        </span>

        {/* Title */}
        <h2 className="lg:text-[44px] md:text-[36px] text-[24px] font-normal text-[#111111] md:w-[25%]">
          {title}
        </h2>

        {/* Description */}
        <Description className=" text-[#111111] max-w-[435px]">
          {description}
        </Description>
      </div>

      {/* Image container */}
      <div className="lg:w-[213px] lg:h-[142px] md:w-[30vw] sm:w-[50vw] w-full h-auto flex-shrink-0 lg:ml-16 sm:ml-10">
        <img
          src={image}
          alt={`${title} Example`}
          className="w-full h-full grayscale object-contain"
        />
      </div>
    </div>
  );
};

export default ServicesItem;
