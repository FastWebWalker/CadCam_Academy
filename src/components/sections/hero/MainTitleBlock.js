import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Description from "../../UI/Description";
import HeroTitle from "../../UI/HeroTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation, Trans } from "react-i18next";

export default function MainTitleBlock() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:624px)");
  const { t, i18n } = useTranslation();

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
      className="flex flex-col relative pb-[6.85%]">
      {isTablet && (
        <>
          <motion.div
            variants={textVariants}
            className="w-full flex justify-end">
            <Description className="text-white max-w-[350px] opacity-85 pb-[5px]">
              {t("heroSection.descriptionPart1")}
              <br></br>
              {t("heroSection.descriptionPart2")}
              <br></br>
              {t("heroSection.descriptionPart3")}
            </Description>
          </motion.div>
          <>
            <div className="flex justify-start items-center">
              <motion.div variants={textVariants}>
                <HeroTitle>
                  {i18n.language === "en" ? (
                    <>
                      The <span className="text-red-800">largest</span>
                    </>
                  ) : (
                    "Найбільший"
                  )}
                </HeroTitle>
              </motion.div>
            </div>
            <div className="flex justify-between items-end gap-[20px] pl-[5%]">
              <motion.div variants={textVariants}>
                <HeroTitle>{t("heroSection.title2")}</HeroTitle>
              </motion.div>
              {isDesktop && (
                <motion.div variants={textVariants}>
                  <Description className="text-white max-w-[350px] opacity-85 pb-[5px]">
                    {t("heroSection.descriptionPart1")}
                    <br></br>
                    {t("heroSection.descriptionPart2")}
                    <br></br> {t("heroSection.descriptionPart3")}
                  </Description>
                </motion.div>
              )}
            </div>
            <div
              className={`flex  ${
                i18n.language === "en"
                  ? "justify-start"
                  : "lg:justify-end justify-start"
              }  items-center gap-[20px] pl-[10%]`}>
              <motion.div variants={textVariants}>
                <HeroTitle>
                  {i18n.language === "en" ? (
                    "In"
                  ) : (
                    <span className="text-red-800">Західної</span>
                  )}
                </HeroTitle>
              </motion.div>
            </div>
            <div
              className={`flex ${
                i18n.language === "en"
                  ? "lg:justify-between justify-start"
                  : "lg:justify-end justify-start"
              }  items-center pl-[15%]`}>
              <motion.div variants={textVariants}>
                <HeroTitle>
                  {i18n.language === "en" ? (
                    <>
                      {" "}
                      <span className="text-red-800">western</span> ukraine
                    </>
                  ) : (
                    <div className="flex w-full justify-end">України</div>
                  )}
                </HeroTitle>
              </motion.div>
            </div>
          </>
        </>
      )}
      {isDesktop && (
        <>
          <div className="flex justify-start items-center">
            <motion.div variants={textVariants}>
              <HeroTitle>
                {i18n.language === "en" ? (
                  <>
                    The <span className="text-red-800">largest</span>
                  </>
                ) : (
                  "Найбільший"
                )}
              </HeroTitle>
            </motion.div>
          </div>
          <div className="flex justify-between items-end gap-[20px] pl-[5%]">
            <motion.div variants={textVariants}>
              <HeroTitle>{t("heroSection.title2")}</HeroTitle>
            </motion.div>
            {isDesktop && (
              <motion.div variants={textVariants}>
                <Description className="text-white max-w-[350px] opacity-85 pb-[5px]">
                  {t("heroSection.descriptionPart1")}
                  <br></br>
                  {t("heroSection.descriptionPart2")}
                  <br></br> {t("heroSection.descriptionPart3")}
                </Description>
              </motion.div>
            )}
          </div>
          <div
            className={`flex ${
              i18n.language === "en" ? "justify-start" : "justify-center"
            } items-center gap-[20px] pl-[10%]`}>
            <motion.div variants={textVariants}>
              <HeroTitle>
                {" "}
                {i18n.language === "en" ? (
                  "In"
                ) : (
                  <span className="text-red-800">Західної</span>
                )}
              </HeroTitle>
            </motion.div>
          </div>
          <div
            className={`flex  ${
              i18n.language === "en"
                ? "justify-start pl-[15%]"
                : "lg:justify-end justify-start pr-[15%]"
            } items-center `}>
            <motion.div variants={textVariants}>
              <HeroTitle>
                {i18n.language === "en" ? (
                  <>
                    {" "}
                    <span className="text-red-800">western</span> ukraine
                  </>
                ) : (
                  "України"
                )}
              </HeroTitle>
            </motion.div>
          </div>
        </>
      )}
      {isMobile && (
        <motion.div variants={textVariants} className="font-thin">
          <>
            <div className="flex justify-start items-center">
              <motion.div variants={textVariants}>
                <HeroTitle>
                  {i18n.language === "en" ? (
                    <>
                      The <span className="text-red-800">largest</span>
                    </>
                  ) : (
                    "Найбільший"
                  )}
                </HeroTitle>
              </motion.div>
            </div>
            <div className="flex justify-between items-end gap-[20px]">
              <motion.div variants={textVariants}>
                <HeroTitle>{t("heroSection.title2")}</HeroTitle>
              </motion.div>
              {isDesktop && (
                <motion.div variants={textVariants}>
                  <Description className="text-white max-w-[350px] opacity-85 pb-[5px]">
                    {t("heroSection.descriptionPart1")}
                    <br></br>
                    {t("heroSection.descriptionPart2")}
                    <br></br> {t("heroSection.descriptionPart3")}
                  </Description>
                </motion.div>
              )}
            </div>
            <div className="flex justify-start items-center gap-[20px]">
              <motion.div variants={textVariants}>
                <HeroTitle>
                  {" "}
                  {i18n.language === "en" ? (
                    "In"
                  ) : (
                    <span className="text-red-800">Західної</span>
                  )}
                </HeroTitle>
              </motion.div>
            </div>
            <div className="flex lg:justify-between justify-start items-center">
              <motion.div variants={textVariants}>
                <HeroTitle>
                  {i18n.language === "en" ? (
                    <>
                      {" "}
                      <span className="text-red-800">western</span> ukraine
                    </>
                  ) : (
                    "України"
                  )}
                </HeroTitle>
              </motion.div>
            </div>
          </>
        </motion.div>
      )}
    </motion.div>
  );
}
