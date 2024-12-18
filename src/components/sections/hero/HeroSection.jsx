import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundImageWrapper from "../../UI/BackgroundImageWrapper";
import backgroundHero from "../../../images/fdcb075db3b83f2b90e9d4c681deca4f.png";
import ContentContainer from "../../UI/ContentContainer";
import MainTitleBlock from "./MainTitleBlock";
import Button from "../../UI/Button";
// import company1 from "../../../images/sections/hero/company1.svg";
// import company2 from "../../../images/sections/hero/company2.svg";
// import company3 from "../../../images/sections/hero/company3.svg";
// import company4 from "../../../images/sections/hero/company4.svg";
// import company5 from "../../../images/sections/hero/company5.svg";
import Description from "../../UI/Description";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // const [formIsOpen, setFormIsOpen] = useState(false);
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
    // setFormIsOpen(true);
  };

  const handleClose = () => {
    // setFormIsOpen(false);
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={hasAnimated ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative">
      <BackgroundImageWrapper
        imageUrl={backgroundHero}
        className="h-screen min-w-screen grayscale absolute inset-0 z-0"
        style={{ backgroundPosition: "center 61%" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </BackgroundImageWrapper>

      <div className="relative z-60 sm:pt-[15%] pt-[20%] lg:pb-[90px] md:pb-[56px] pb-[48px]">
        <ContentContainer>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col">
            {isTablet && (
              <div className="w-[100%] flex justify-end items-center">
                <Description className="text-white max-w-[350px] mb-[45px] justify-end">
                  {t("heroSection.description1")}
                </Description>
              </div>
            )}
            <MainTitleBlock />
            {(isTablet || isMobile) && (
              <Description className="text-white max-w-[324px] mt-8">
                {t("heroSection.description2")}
              </Description>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-3 lg:mb-[78px] md:mb-[85px] mb-[28px] mt-[32px] md:flex-nowrap flex-wrap">
              <Link
                to={"https://www.setrade.com.ua/"}
                target="_blank"
                rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="red-white"
                    withoutArrow={isMobileSmall}
                    className="bg-redCustom hover:bg-white hover:border-white">
                    {t("buttons.ourStore")}
                  </Button>
                </motion.button>
              </Link>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}>
                <Button withoutArrow={isMobileSmall} variant="white-white">
                  {t("buttons.orderCall")}
                </Button>
              </motion.button>
            </motion.div>
            <motion.div
              className="flex lg:justify-start lg:h-[42px] md:h-[50px] h-[42px] items-center gap-3 flex-wrap [@media(max-width:767px)]:mb-[48px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}></motion.div>
          </motion.div>
        </ContentContainer>
      </div>
    </motion.section>
  );
};

export default HeroSection;

// {
//   /* {[company1, company2, company3, company4, company5].map(
//                 (logo, index) => (
//                   <motion.img
//                     key={index}
//                     src={logo}
//                     className="h-full opacity-70"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.3 }}
//                     alt={`company-logo-${index + 1}`}
//                   />
//                 )
//               )} */
// }
