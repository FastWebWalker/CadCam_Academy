import React from "react";

const LShape = () => {
  return (
    <div className="absolute top-[-25px] left-0">
      <div className="relative lg:h-[25px] lg:w-[94.60px] [@media(min-width:625px)]:h-[19px] [@media(min-width:625px)]:w-[72px]">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 w-[2px] h-full bg-[#A4000A]"></div>
        {/* Horizontal Line */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-[#A4000A]"></div>
      </div>
    </div>
  );
};

export default LShape;
