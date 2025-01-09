import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundImageWrapper from "../../UI/BackgroundImageWrapper";
import ContentContainer from "../../UI/ContentContainer";
import MainTitleBlock from "./MainTitleBlock";
import Button from "../../UI/Button";
import Description from "../../UI/Description";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowDown from "./ArrowDown";

const HeroSection = ({ image }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");
  const isMobileSmall = useMediaQuery("(max-width: 400px)");
  const { t } = useTranslation();

  // Refs and state for animation control
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isSectionInView = useInView(sectionRef, {
    triggerOnce: true,
    threshold: 0.2,
  });

  if (isSectionInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.section
      id="about-us"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={hasAnimated ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative">
      {/* Background layer */}
      <BackgroundImageWrapper
        imageUrl={image}
        className="h-screen min-w-screen grayscale absolute inset-0 z-0"
        style={{ backgroundPosition: "center 61%" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </BackgroundImageWrapper>
      {/* Content layer */}
      <div className="relative z-60 sm:pt-[12.1%] pt-[20%] lg:pb-[64px] md:pb-[122px] pb-[48px]">
        <ContentContainer className="relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col">
            <MainTitleBlock />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:max-w-[70vw] max-w-full flex flex-col-reverse [@media(min-width:768px)]:flex-row  justify-between md:items-center items-start gap-3 lg:mb-[78px] md:mb-[85px] mb-[28px] mt-[32px] md:flex-nowrap flex-wrap">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  withoutArrow={isMobileSmall}
                  variant="secondary"
                  href={"https://order.cadcam.energy/login"}>
                  {t("buttons.makeAnOrder")}
                </Button>
              </motion.button>
              <motion.div>
                <Description className="text-white opacity-85">
                  {t("heroSection.description2Part1")}
                  <br></br> {t("heroSection.description2Part2")}
                </Description>
              </motion.div>
              <motion.div>
                <Description className="text-white opacity-85">
                  {t("heroSection.description3Part1")}
                  <br></br> {t("heroSection.description3Part2")}
                </Description>
              </motion.div>
            </motion.div>
          </motion.div>
        </ContentContainer>
        <ArrowDown />
      </div>
    </motion.section>
  );
};

export default HeroSection;
