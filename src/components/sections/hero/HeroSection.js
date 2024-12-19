import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundImageWrapper from "../../UI/BackgroundImageWrapper";
import backgroundHero from "../../../images/sections/hero/fdcb075db3b83f2b90e9d4c681deca4f.png";
import ContentContainer from "../../UI/ContentContainer";
import MainTitleBlock from "./MainTitleBlock";
import Button from "../../UI/Button";
import Description from "../../UI/Description";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSection = () => {
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

  const handleSubmit = () => {
    setFormIsOpen(true);
  };

  const handleClose = () => {
    setFormIsOpen(false);
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={hasAnimated ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative">
      {/* Background layer */}
      <BackgroundImageWrapper
        imageUrl={backgroundHero}
        className="h-screen min-w-screen grayscale absolute inset-0 z-0"
        style={{ backgroundPosition: "center 61%" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </BackgroundImageWrapper>
      {/* Content layer */}
      <div className="relative z-60 sm:pt-[12.1%] pt-[20%] lg:pb-[90px] md:pb-[56px] pb-[48px]">
        <ContentContainer>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col">
            {/* {isTablet && (
              <div className="w-[100%] flex justify-end items-center">
                <Description className="text-white max-w-[350px] mb-[45px] justify-end">
                  {t("heroSection.description1")}
                </Description>
              </div>
            )} */}
            <MainTitleBlock />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-start items-center gap-3 lg:mb-[78px] md:mb-[85px] mb-[28px] mt-[32px] md:flex-nowrap flex-wrap">
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}>
                <Button withoutArrow={isMobileSmall} variant="white-white">
                  {t("buttons.orderCall")}
                </Button>
              </motion.button>
              <motion.div>
                <Description className="text-white opacity-85">
                  Get directions:<br></br>43 Pasichna Street, Lviv
                </Description>
              </motion.div>
              <motion.div>
                <Description className="text-white opacity-85">
                  Mon - Fri: 9:00 - 18:00<br></br>We mill: 24/7
                </Description>
              </motion.div>
            </motion.div>
          </motion.div>
        </ContentContainer>
      </div>
    </motion.section>
  );
};

export default HeroSection;
