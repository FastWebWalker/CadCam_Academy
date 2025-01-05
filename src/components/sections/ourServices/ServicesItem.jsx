
import React from "react";

const ServicesItem = ({ number, title, description, image }) => {
  return (
    <div className="flex items-center justify-between w-full border-t border-[#979797] py-8">
      {/* Text content container */}
      <div className="flex items-center gap-16 flex-grow">
        {/* Number */}
        <span className="text-[2vw] text-[#111111] w-[5%]">
          {number.padStart(2, "0")}
        </span>

        {/* Title */}
        <h2 className="text-[2.75vw] font-normal text-[#111111] w-[25%]">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[1vw] text-[#111111] max-w-[435px]">{description}</p>
      </div>

      {/* Image container */}
      <div className="w-[213px] h-[142px] flex-shrink-0 ml-16">
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
