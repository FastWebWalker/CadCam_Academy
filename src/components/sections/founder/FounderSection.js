// import BackgroundImageWrapper from "../../UI/BackgroundImageWrapper";
// import ContentContainer from "../../UI/ContentContainer";
// import founder from "../../../images/sections/founder/About.png";
// import Description from "../../UI/Description";
// import group1 from "../../../images/sections/founder/Group1.svg";
// import group2 from "../../../images/sections/founder/Group2.svg";
// import group3 from "../../../images/sections/founder/Group3.svg";
// import group4 from "../../../images/sections/founder/Group4.svg";
// import group5 from "../../../images/sections/founder/Group5.svg";
// import { useMediaQuery } from "@mui/material";
// import { useTranslation } from "react-i18next";

// export default function FounderSection() {
//   const isDesktopLarge = useMediaQuery("(min-width:1280px)");
//   const isDesktop = useMediaQuery("(min-width:1024px) and (max-width: 1279px");
//   const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
//   const isMobile = useMediaQuery("(max-width:767px)");
//   const { t } = useTranslation();
//   return (
//     <>
//       {!isMobile ? (
//         <BackgroundImageWrapper imageUrl={founder}>
//           <section className="py-[129px]">
//             <ContentContainer>
//               <div className="flex justify-end items-center text-white">
//                 <div className="flex flex-col justify-between gap-[97px] items-center">
//                   <div className="flex flex-col">
//                     <h3 className="font-normal text-[44px] mb-1">
//                       {t("founderSection.name")}
//                     </h3>
//                     <p className="text-[20px] mb-8">
//                       {t("founderSection.title")}
//                     </p>
//                     <Description className="lg:max-w-[667px] max-w-[400px]">
//                       {t("founderSection.description")}
//                     </Description>
//                   </div>
//                   {isDesktopLarge && (
//                     <div className="flex flex-col items-start justify-start gap-[32px] -ml-5">
//                       <h4 className="text-[32px] font-normal ">
//                         {t("founderSection.labsTitle")}
//                       </h4>
//                       <div className="grid grid-cols-3 gap-x-[68px] gap-y-[12px]">
//                         <a
//                           href="https://contour-lab.com/"
//                           className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
//                           <img src={group1} alt="logo-photo" />
//                         </a>
//                         <a
//                           href="https://senergy-dental.com/"
//                           className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
//                           <img src={group2} alt="logo-photo" />
//                         </a>
//                         <a
//                           href="https://cadcam.energy/"
//                           className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
//                           <img src={group3} alt="logo-photo" />
//                         </a>
//                         <a
//                           href="https://www.setrade.com.ua/"
//                           className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
//                           <img src={group4} alt="logo-photo" />
//                         </a>
//                         <a
//                           href="https://dentalcad.online/"
//                           className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
//                           <img src={group5} alt="logo-photo" />
//                         </a>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </ContentContainer>
//           </section>
//         </BackgroundImageWrapper>
//       ) : (
//         <section className="bg-[#191919] pt-[30px]">
//           <ContentContainer>
//             <div className="flex justify-center flex-col gap-[30px] items-center text-white">
//               <div className="flex flex-col justify-between gap-[97px] items-center">
//                 <div className="flex flex-col">
//                   <h3 className="font-normal text-[44px] mb-1">
//                     {t("founderSection.name")}
//                   </h3>
//                   <p className="text-[20px] mb-8">
//                     {t("founderSection.title")}
//                   </p>
//                   <Description>{t("founderSection.description")}</Description>
//                 </div>
//               </div>
//               <div>
//                 <img src={founder} alt="founder" />
//               </div>
//             </div>
//           </ContentContainer>
//         </section>
//       )}

//       {(isMobile || isTablet || isDesktop) && (
//         <div className=" bg-[#191919] md:py-[60px] py-[30px]">
//           <ContentContainer className="flex flex-col items-start justify-start gap-[32px]">
//             <h4 className="text-[32px] text-white lg:pb-[40px] font-normal ">
//               {t("founderSection.labsTitle")}
//             </h4>
//             <div className="flex md:justify-between justify-start w-[100%] gap-x-[45px] gap-y-[12px] md:flex-nowrap flex-wrap z-0">
//               <a
//                 href="https://contour-lab.com/"
//                 className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
//                 <img src={group1} alt="logo-photo" />
//               </a>
//               <a
//                 href="https://senergy-dental.com/"
//                 className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
//                 <img src={group2} alt="logo-photo" />
//               </a>
//               <a
//                 href="https://cadcam.energy/"
//                 className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
//                 <img src={group3} alt="logo-photo" />
//               </a>
//               <a
//                 href="https://www.setrade.com.ua/"
//                 className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
//                 <img src={group4} alt="logo-photo" />
//               </a>
//               <a
//                 href="https://dentalcad.online/"
//                 className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300">
//                 <img src={group5} alt="logo-photo" />
//               </a>
//             </div>
//           </ContentContainer>
//         </div>
//       )}
//     </>
//   );
// }

import BackgroundImageWrapper from "../../UI/BackgroundImageWrapper";
import ContentContainer from "../../UI/ContentContainer";
import founder from "../../../images/sections/founder/About.png";
import Description from "../../UI/Description";
import group1 from "../../../images/sections/founder/Group1.svg";
import group2 from "../../../images/sections/founder/Group2.svg";
import group3 from "../../../images/sections/founder/Group3.svg";
import group4 from "../../../images/sections/founder/Group4.svg";
import group5 from "../../../images/sections/founder/Group5.svg";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FounderSection() {
  const isDesktopLarge = useMediaQuery("(min-width:1280px)");
  const isDesktop = useMediaQuery("(min-width:1024px) and (max-width: 1279px");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");
  const { t } = useTranslation();

  // Refs for intersection observer
  const contentRef = useRef(null);
  const labsRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });
  const isLabsInView = useInView(labsRef, { once: true, margin: "-100px" });

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  const labsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.4,
        delay: custom * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      {!isMobile ? (
        <BackgroundImageWrapper imageUrl={founder}>
          <section className="py-[129px]" id="about-us">
            <ContentContainer>
              <div className="flex justify-end items-center text-white">
                <div className="flex flex-col justify-between gap-[97px] items-center">
                  <motion.div
                    ref={contentRef}
                    className="flex flex-col"
                    initial="hidden"
                    animate={isContentInView ? "visible" : "hidden"}>
                    <motion.h3
                      variants={headerVariants}
                      className="font-normal text-[44px] mb-1">
                      {t("founderSection.name")}
                    </motion.h3>
                    <motion.p
                      variants={headerVariants}
                      className="text-[20px] mb-8">
                      {t("founderSection.title")}
                    </motion.p>
                    <motion.div variants={descriptionVariants}>
                      <Description
                        className={`xl:max-w-[667px]  ${
                          isDesktop ? "max-w-[550px]" : "md:max-w-[400px]"
                        }`}>
                        {t("founderSection.description")}
                      </Description>
                    </motion.div>
                  </motion.div>

                  {isDesktopLarge && (
                    <motion.div
                      ref={labsRef}
                      className="flex flex-col items-start justify-start gap-[32px] -ml-5"
                      initial="hidden"
                      animate={isLabsInView ? "visible" : "hidden"}
                      variants={labsVariants}>
                      <motion.h4
                        variants={headerVariants}
                        className="text-[32px] font-normal">
                        {t("founderSection.labsTitle")}
                      </motion.h4>
                      <div className="grid grid-cols-3 gap-x-[68px] gap-y-[12px]">
                        {[
                          { href: "https://contour-lab.com/", img: group1 },
                          { href: "https://senergy-dental.com/", img: group2 },
                          { href: "https://cadcam.energy/", img: group3 },
                          { href: "https://www.setrade.com.ua/", img: group4 },
                          { href: "https://dentalcad.online/", img: group5 },
                        ].map((item, index) => (
                          <motion.a
                            key={item.href}
                            href={item.href}
                            className="w-[169px] h-[80px] flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300"
                            variants={logoVariants}
                            custom={index}
                            whileHover={{
                              scale: 1.1, // Slightly enlarge the logo on hover
                              duration: 0.1,
                              transition: {
                                type: "tween", // Use tween instead of spring for a smooth, non-bouncy effect
                                ease: "easeOut", // Smooth out the animation at the end
                                duration: 0.3, // Set the duration to 0.3 seconds
                              },
                            }}>
                            <img src={item.img} alt="logo-photo" />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </ContentContainer>
          </section>
        </BackgroundImageWrapper>
      ) : (
        <section className="bg-[#191919] pt-[30px]" id="about-us">
          <ContentContainer>
            <motion.div
              ref={contentRef}
              className="flex justify-center flex-col gap-[30px] items-center text-white"
              initial="hidden"
              animate={isContentInView ? "visible" : "hidden"}>
              <div className="flex flex-col justify-between gap-[97px] items-center">
                <div className="flex flex-col">
                  <motion.h3
                    variants={headerVariants}
                    className="font-normal text-[44px] mb-1">
                    {t("founderSection.name")}
                  </motion.h3>
                  <motion.p
                    variants={headerVariants}
                    className="text-[20px] mb-8">
                    {t("founderSection.title")}
                  </motion.p>
                  <motion.div variants={descriptionVariants}>
                    <Description>{t("founderSection.description")}</Description>
                  </motion.div>
                </div>
              </div>
              <motion.div variants={descriptionVariants}>
                <img src={founder} alt="founder" />
              </motion.div>
            </motion.div>
          </ContentContainer>
        </section>
      )}

      {(isMobile || isTablet || isDesktop) && (
        <div className="bg-[#191919] md:py-[60px] py-[30px]">
          <ContentContainer className="flex flex-col items-start justify-start gap-[32px]">
            <motion.h4
              ref={labsRef}
              initial="hidden"
              animate={isLabsInView ? "visible" : "hidden"}
              variants={headerVariants}
              className="text-[32px] text-white lg:pb-[40px] font-normal">
              {t("founderSection.labsTitle")}
            </motion.h4>
            <div className="flex md:justify-between justify-between w-[100%] gap-x-[45px] gap-y-[12px] md:flex-nowrap flex-wrap z-0">
              {[
                { href: "https://contour-lab.com/", img: group1 },
                { href: "https://senergy-dental.com/", img: group2 },
                { href: "https://cadcam.energy/", img: group3 },
                { href: "https://www.setrade.com.ua/", img: group4 },
                { href: "https://dentalcad.online/", img: group5 },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="cursor-pointer lg:w-[136px] lg:h-[65px] w-[106px] h-[50px] flex justify-center items-center hover:scale-110 transition-all duration-300"
                  variants={logoVariants}
                  initial="hidden"
                  animate={isLabsInView ? "visible" : "hidden"}
                  custom={index}>
                  <img src={item.img} alt="logo-photo" />
                </motion.a>
              ))}
            </div>
          </ContentContainer>
        </div>
      )}
    </>
  );
}
