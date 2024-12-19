import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Description from "../../UI/Description";
import HeroTitle from "../../UI/HeroTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

export default function MainTitleBlock() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:624px)");
  const { t } = useTranslation();

  // State to track if animation has already been triggered
  const [hasAnimated, setHasAnimated] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
    triggerOnce: true, // Animate only once
  });

  // Update state when `inView` becomes true
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      className="flex flex-col relative pb-[6.85%] ">
      {(isTablet || isDesktop) && (
        <>
          <div className="flex justify-start items-center">
            <motion.div variants={textVariants}>
              <HeroTitle>
                The <span className="text-red-800">largest</span>
              </HeroTitle>
            </motion.div>
          </div>
          <div className="flex justify-between items-end gap-[20px] pl-[5%]">
            <motion.div variants={textVariants}>
              <HeroTitle>milling center</HeroTitle>
            </motion.div>
            {isDesktop && (
              <motion.div variants={textVariants}>
                <Description className="text-white max-w-[350px] opacity-85 pb-[5px]">
                  - CAD/CAM milling<br></br>- 3D PRINT (ASIGA, FORMLABS)
                  <br></br>- High-quality zirkonzahn equipment
                </Description>
              </motion.div>
            )}
          </div>
          <div className="flex justify-start items-center gap-[20px] pl-[10%]">
            <motion.div variants={textVariants}>
              <HeroTitle>in</HeroTitle>
            </motion.div>
          </div>
          <div className="flex lg:justify-between justify-end items-center pl-[15%]">
            <motion.div variants={textVariants}>
              <HeroTitle>
                <span className="text-red-800">western</span> ukraine
              </HeroTitle>
            </motion.div>
          </div>
        </>
      )}
      {isMobile && (
        <motion.div variants={textVariants}>
          <HeroTitle>Global leaders and experts in dental field</HeroTitle>
        </motion.div>
      )}
    </motion.div>
  );
}
