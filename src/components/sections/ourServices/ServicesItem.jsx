// import React from "react";
// import Description from "../../UI/Description";

// const ServicesItem = ({ number, title, description, image }) => {
//   return (
//     <div className="flex gap-8 items-center justify-between border-t border-[#979797] pt-8 mb-[24px] text-[#111111]">
//       <div className="flex items-center justify-start gap-[72px]">
//         <span className="text-[32px] flex justify-center items-center">
//           {number}
//         </span>
//         <h2 className="text-[44px] font-normal">{title}</h2>
//       </div>

//       <Description className={"max-w-[435px]"}>{description}</Description>
//       {/* <div className="flex gap-[73px] justify-between items-center"></div> */}
//       <div className="">
//         <img
//           src={image}
//           alt="CAD Modeling Example"
//           className="w-[213px] h-auto grayscale"
//         />
//       </div>
//     </div>
//   );
// };

// export default ServicesItem;

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
