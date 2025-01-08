import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContentContainer from "../../UI/ContentContainer";
import Logo from "./Logo";
import SwitchButton from "../../UI/SwitchButton";
import Button from "../../UI/Button";
import { useTranslation } from "react-i18next";
import BurgerButton from "./BurgerButton";
import { useCallback } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = () => setFormIsOpen(true);
  const handleClose = () => setFormIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight / 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Navigation items with their corresponding section IDs
  const navItems = [
    { text: t("header.navigation.aboutUs"), sectionId: "about-us" },
    { text: t("header.navigation.services"), sectionId: "services" },
    { text: t("header.navigation.equipment"), sectionId: "equipment" },
    { text: t("header.navigation.ourTeam"), sectionId: "team" },
    { text: t("header.navigation.gallery"), sectionId: "gallery" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close mobile menu if it's open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      // Calculate header height to offset scroll position
      const headerHeight = document.querySelector("header").offsetHeight;

      // Smooth scroll to section with header offset
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-10 md:border-b-[0.5px] border-[#979797] transition-all duration-200 ${
        isScrolled ? "bg-[#111111] border-none" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}>
      <ContentContainer>
        <div className="flex items-center justify-between xxl:h-[88px] xl:h-[72px] h-[64px]">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden [@media(min-width:960px)]:block">
            <ul className="flex justify-center items-center gap-[42px] max-lg:gap-[24px]">
              {navItems.map(({ text, sectionId }) => (
                <motion.li
                  key={sectionId}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => scrollToSection(sectionId)}
                    className="uppercase text-white cursor-pointer">
                    {text}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="gap-3 justify-center items-center hidden [@media(min-width:960px)]:flex">
            <SwitchButton />
            <button onClick={handleSubmit}>
              <Button className="uppercase" variant="primary">
                {t("header.buttons.getInTouch")}
              </Button>
            </button>
          </div>

          <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="[@media(min-width:960px)]:hidden overflow-hidden absolute top-0 left-0 w-[100vw] bg-[#111111] flex flex-col justify-center gap-[50px] p-[44px] items-center">
              <SwitchButton />
              <ul className="flex flex-col justify-center items-center text-[25px] gap-[42px]">
                {navItems.map(({ text, sectionId }) => (
                  <motion.li
                    key={sectionId}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                    <button
                      onClick={() => scrollToSection(sectionId)}
                      className="uppercase text-white cursor-pointer">
                      {text}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Button variant="red-white" className="uppercase z-50">
                  {t("header.buttons.getInTouch")}
                </Button>
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </ContentContainer>
      {/* {formIsOpen && (
        <FormModal
          onSubmit={handleSubmit}
          onClose={handleClose}
          animation={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
            transition: { duration: 0.3 },
          }}
        />
      )} */}
    </motion.header>
  );
};

export default Header;
