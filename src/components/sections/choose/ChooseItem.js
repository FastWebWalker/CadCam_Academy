// import { useMediaQuery } from "@mui/material";
// import { useTranslation } from "react-i18next";

// export default function ChooseItem({
//   image,
//   title,
//   description,
//   imageCorrection,
// }) {
//   const isDesktop = useMediaQuery("(min-width:1024px)");
//   const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
//   const isMobile = useMediaQuery("(max-width:767px)");
//   const { t, i18n } = useTranslation();

//   const currentLanguage = i18n.language; // Get the current language
//   return (
//     <>
//       {(isTablet || isDesktop) && (
//         <div className="relative z-1 flex justify-center items-center">
//           {/* <div className={`absolute top-[-10%] left-[-5%] z-1 ${imageCorrection}`}> */}
//           <div className={`absolute -top-5 left-0 z-1 ${imageCorrection}`}>
//             <img
//               src={image}
//               alt={title}
//               className="lg:h-[238px] h-[220px] [@media(max-width:624px)]:h-[58px]"
//             />
//           </div>
//           <div className="relative ml-[87px] h-[100%] bg-white p-3">
//             <h3 className="font-normal text-[32px] bg-white leading-tight uppercase mb-[15px] max-w-[350px]">
//               {title}
//             </h3>
//             <p className="text-[#191919E5] leading-none">{description}</p>
//           </div>
//         </div>
//       )}
//       {isMobile && (
//         <div className="relative z-1 flex justify-center items-center">
//           {/* <div className={`absolute top-[-10%] left-[-5%] z-1 ${imageCorrection}`}> */}

//           <div className="relative h-[100%] bg-white p-3">
//             <div className="flex justify-start items-center gap-[16px] mb-[12px]">
//               <img src={image} alt={title} className="h-[58px]" />

//               <h3
//                 className={`font-normal  bg-white leading-tight uppercase ${
//                   currentLanguage === "ua" ? "text-[20px]" : "text-[24px]"
//                 }`}>
//                 {title}
//               </h3>
//             </div>
//             <p className="text-[#191919E5] leading-none">{description}</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ChooseItem({
  image,
  title,
  description,
  imageCorrection,
}) {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language; // Get the current language

  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Set up IntersectionObserver for each ChooseItem
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger animation when 20% of the item is in view
  });

  return (
    <motion.div
      ref={ref} // Attach observer to the item
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Trigger animation based on visibility
    >
      {(isTablet || isDesktop) && (
        <div className="relative z-1 flex justify-center items-center">
          <div className={`absolute -top-5 left-0 z-1 ${imageCorrection}`}>
            <img
              src={image}
              alt={title}
              className="lg:h-[238px] h-[220px] [@media(max-width:624px)]:h-[58px]"
            />
          </div>
          <div className="relative ml-[87px] h-[100%] bg-white p-3">
            <h3 className="font-normal text-[32px] bg-white leading-tight uppercase mb-[15px] max-w-[350px]">
              {title}
            </h3>
            <p className="text-[#191919E5] leading-none">{description}</p>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="relative z-1 flex justify-center items-center">
          <div className="relative h-[100%] bg-white p-3">
            <div className="flex justify-start items-center gap-[16px] mb-[12px]">
              <img src={image} alt={title} className="h-[58px]" />

              <h3
                className={`font-normal  bg-white leading-tight uppercase ${
                  currentLanguage === "ua" ? "text-[20px]" : "text-[24px]"
                }`}>
                {title}
              </h3>
            </div>
            <p className="text-[#191919E5] leading-none">{description}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
