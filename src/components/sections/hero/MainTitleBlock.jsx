import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Description from "../../UI/Description";
import HeroTitle from "../../UI/HeroTitle"

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
      className="flex flex-col relative">
      {(isTablet || isDesktop) && (
        <>
          <div className="flex justify-between items-center">
            <motion.div variants={textVariants}>
              <HeroTitle>global leaders</HeroTitle>
            </motion.div>
            {isDesktop && (
              <motion.div variants={textVariants}>
                <Description className="text-white max-w-[350px]">
                  {t("heroSection.description1")}
                </Description>
              </motion.div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <motion.div variants={textVariants}>
              <HeroTitle>and experts</HeroTitle>
            </motion.div>
          </div>
          <div className="flex lg:justify-between justify-end items-center">
            {isDesktop && (
              <motion.div variants={textVariants}>
                <Description className="text-white max-w-[324px] mt-8">
                  {t("heroSection.description2")}
                </Description>
              </motion.div>
            )}
            <motion.div variants={textVariants}>
              <HeroTitle>in dental field</HeroTitle>
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
