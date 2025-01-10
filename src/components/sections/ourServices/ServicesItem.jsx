// import React from "react";
// import Description from "../../UI/Description";

// const ServicesItem = ({ number, title, description, image }) => {
//   return (
//     <div className="flex flex-col sm:flex-row gap-[20px] sm:items-center items-start justify-between w-full border-t border-[#979797] py-8">
//       {/* Text content container */}
//       <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 md:gap-[18px] gap-[5px] items-start flex-grow">
//         {/* Number */}
//         <span className="md:text-[32px] text-[24px] text-[#111111] md:w-[5%]">
//           {number.padStart(2, "0")}
//         </span>

//         {/* Title */}
//         <h2 className="lg:text-[44px] md:text-[36px] text-[24px] font-normal text-[#111111] md:w-[25%]">
//           {title}
//         </h2>

//         {/* Description */}
//         <Description className=" text-[#111111] max-w-[435px]">
//           {description}
//         </Description>
//       </div>

//       {/* Image container */}
//       <div className="lg:w-[213px] lg:h-[142px] md:w-[30vw] sm:w-[50vw] w-full h-auto flex-shrink-0 lg:ml-16 sm:ml-10">
//         <img
//           src={image}
//           alt={`${title} Example`}
//           className="w-full h-full grayscale object-contain"
//         />
//       </div>
//     </div>
//   );
// };

// export default ServicesItem;

import React from "react";
import { motion } from "framer-motion";
import Description from "../../UI/Description";

const ServicesItem = ({ number, title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row gap-[20px] sm:items-center items-start justify-between w-full relative py-8">
      {/* Animated border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-[#979797] origin-left"
      />

      {/* Text content container */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 md:gap-[18px] gap-[5px] items-start flex-grow">
        {/* Number */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:text-[32px] text-[24px] text-[#111111] md:w-[5%]">
          {number.padStart(2, "0")}
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:text-[44px] md:text-[36px] text-[24px] font-normal text-[#111111] md:w-[25%]">
          {title}
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <Description className="text-[#111111] max-w-[435px]">
            {description}
          </Description>
        </motion.div>
      </div>

      {/* Image container */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="lg:w-[213px] lg:h-[142px] md:w-[30vw] sm:w-[50vw] w-full h-auto flex-shrink-0 lg:ml-16 sm:ml-10">
        <img
          src={image}
          alt={`${title} Example`}
          className="w-full h-full grayscale object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default ServicesItem;
