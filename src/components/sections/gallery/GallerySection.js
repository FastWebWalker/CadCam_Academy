import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, inView } from "framer-motion";
import ContentContainer from "../../UI/ContentContainer";
import { useTranslation } from "react-i18next";
import fullAnatomy0 from "../../../images/sections/gallery/fullAnatomy/05102023_Contour-2.2.png";
import fullAnatomy1 from "../../../images/sections/gallery/fullAnatomy/08112023_Contour-3.png";
import fullAnatomy2 from "../../../images/sections/gallery/fullAnatomy/10102023_Contour_1.3.png";
import fullAnatomy3 from "../../../images/sections/gallery/fullAnatomy/13092023_CadCam-2.png";
import fullAnatomy4 from "../../../images/sections/gallery/fullAnatomy/15092023_Contour-2-1.png";
import fullAnatomy5 from "../../../images/sections/gallery/fullAnatomy/15092023_Contour-2.png";
import fullAnatomy6 from "../../../images/sections/gallery/fullAnatomy/20092023_Contour.png";
import fullAnatomy7 from "../../../images/sections/gallery/fullAnatomy/26102023_Contour-2.png";
import fullAnatomy8 from "../../../images/sections/gallery/fullAnatomy/27092023_Contour-3.png";

import crown1 from "../../../images/sections/gallery/crowns/02102023_Contour-0.png";
import crown2 from "../../../images/sections/gallery/crowns/02102023_Contour-1.png";
import crown3 from "../../../images/sections/gallery/crowns/220823_Senergy-4 (1) (2).png";
import crown4 from "../../../images/sections/gallery/crowns/250823_Senergy-2-2.png";
import crown5 from "../../../images/sections/gallery/crowns/250823_Senergy-3-2.png";
import crown6 from "../../../images/sections/gallery/crowns/250823_Senergy-4-1.png";
import crown7 from "../../../images/sections/gallery/crowns/28092023_Senergy-4.png";
import crown8 from "../../../images/sections/gallery/crowns/28092023_Senergy-6.png";

import block1 from "../../../images/sections/gallery/blocks/10112023_CadCam-1.png";
import block2 from "../../../images/sections/gallery/blocks/image 67.png";

import threeD1 from "../../../images/sections/gallery/3d/220823_Senergy-4 (1).png";
import threeD2 from "../../../images/sections/gallery/3d/image 68.png";
import threeD3 from "../../../images/sections/gallery/3d/DSC_2928.jfif";

import titBeams1 from "../../../images/sections/gallery/titanicBeams/10102023_Contour-1.png";
import titBeams2 from "../../../images/sections/gallery/titanicBeams/10102023_Contour-3 (1).png";
import titBeams3 from "../../../images/sections/gallery/titanicBeams/IMG_1812.PNG";
import titBeams4 from "../../../images/sections/gallery/titanicBeams/IMG_1813.PNG";
import titBeams5 from "../../../images/sections/gallery/titanicBeams/IMG_1814.PNG";
import titBeams6 from "../../../images/sections/gallery/titanicBeams/IMG_1815.PNG";
import titBeams7 from "../../../images/sections/gallery/titanicBeams/IMG_1816.PNG";

import SectionHeader from "../../UI/SectionHeader";
import Button from "../../UI/Button";
import ImageModal from "./ImageModal";

const titaniumBeams = [];
const crowns = [crown1, crown2, crown3, crown4, crown5, crown6, crown7, crown8];
const blocks = [block1, block2];
const fullAnatomy = [
  fullAnatomy0,
  fullAnatomy1,
  fullAnatomy2,
  fullAnatomy3,
  fullAnatomy4,
  fullAnatomy5,
  fullAnatomy6,
  fullAnatomy7,
  fullAnatomy8,
];
const threeDPrinting = [threeD1, threeD2, threeD3];

const titanicBeams = [
  titBeams1,
  titBeams2,
  titBeams3,
  titBeams4,
  titBeams5,
  titBeams6,
  titBeams7,
];
const all = [
  ...fullAnatomy,
  ...crowns,
  ...blocks,
  ...threeDPrinting,
  ...titanicBeams,
];

const GallerySection = () => {
  const { t } = useTranslation();
  const [currentCompany, setCurrentCompany] = useState();
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logos = [
    t("galleryPage.tabs.0"),
    t("galleryPage.tabs.1"),
    t("galleryPage.tabs.2"),
    t("galleryPage.tabs.3"),
    t("galleryPage.tabs.4"),
    t("galleryPage.tabs.5"),
  ];

  useEffect(() => {
    setCurrentCompany(t("galleryPage.tabs.0"));
  }, []);

  const getImagesForCompany = (company) => {
    switch (company) {
      case t("galleryPage.tabs.0"):
        return all;
      case t("galleryPage.tabs.1"):
        return titanicBeams;
      case t("galleryPage.tabs.2"):
        return crowns;
      case t("galleryPage.tabs.3"):
        return blocks;
      case t("galleryPage.tabs.4"):
        return fullAnatomy;
      case t("galleryPage.tabs.5"):
        return threeDPrinting;
      default:
        return [];
    }
  };

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const gridVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const getCurrentImages = () => {
    const images = getImagesForCompany(currentCompany);
    if (window.innerWidth <= 768 && !showAll) {
      return images.slice(0, 5);
    }
    return images;
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <section className="py-12 bg-white">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={t("galleryPage.title1")}
          titleSecondPart={t("galleryPage.title2")}
          isDescription={true}
          description={t("galleryPage.description")}
          inView={true}
          titlePl={"lg:pl-[40%]"}
        />
        {/* Tabs */}
        <div className="flex flex-wrap justify-between gap-[22px] sm:mb-[44px] mb-[32px]">
          {logos.map((logo) => (
            <button
              key={logo.name}
              onClick={() => setCurrentCompany(logo)}
              className={`relative transition-all duration-300`}>
              <div
                className={`sm:text-[24px] text-[20px]  ${
                  currentCompany === logo ? "font-medium" : ""
                }`}>
                {logo}
              </div>
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCompany}
            variants={gridVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {getCurrentImages(currentCompany).map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setIsModalOpen(true)}
                className="aspect-square relative overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {window.innerWidth <= 768 &&
          !showAll &&
          getImagesForCompany(currentCompany).length > 5 && (
            <div className="mt-8 text-center">
              <Button onClick={handleShowMore} variant="outline-red">
                {t("buttons.showAllImages")}
              </Button>
            </div>
          )}
      </ContentContainer>
      {isModalOpen && (
        <ImageModal
          images={getCurrentImages(currentCompany)}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default GallerySection;
