import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, inView } from "framer-motion";
import ContentContainer from "../../UI/ContentContainer";
import { useTranslation } from "react-i18next";
import fullAnatomy0 from "../../../images/sections/gallery/fullAnatomy/IMG_1812.PNG";
import fullAnatomy1 from "../../../images/sections/gallery/fullAnatomy/IMG_1813.PNG";
import fullAnatomy2 from "../../../images/sections/gallery/fullAnatomy/IMG_1814.PNG";
import fullAnatomy3 from "../../../images/sections/gallery/fullAnatomy/IMG_1815.PNG";
import fullAnatomy4 from "../../../images/sections/gallery/fullAnatomy/IMG_1816.PNG";
import fullAnatomy5 from "../../../images/sections/gallery/fullAnatomy/10102023_Contour-1.png";
import fullAnatomy6 from "../../../images/sections/gallery/fullAnatomy/10102023_Contour-3 (1).png";
import crown1 from "../../../images/sections/gallery/crowns/05102023_Contour-2.2.png";
import crown2 from "../../../images/sections/gallery/crowns/08112023_Contour-3.png";
import crown3 from "../../../images/sections/gallery/crowns/10102023_Contour-1.png";
import crown4 from "../../../images/sections/gallery/crowns/10102023_Contour-3 (1).png";
import crown5 from "../../../images/sections/gallery/crowns/10102023_Contour_1.3.png";
import crown6 from "../../../images/sections/gallery/crowns/13092023_CadCam-2.png";
import crown7 from "../../../images/sections/gallery/crowns/15092023_Contour-2-1.png";
import crown8 from "../../../images/sections/gallery/crowns/15092023_Contour-2.png";
import crown9 from "../../../images/sections/gallery/crowns/27092023_Contour-3.png";
import block1 from "../../../images/sections/gallery/blocks/02102023_Contour-0.png";
import block2 from "../../../images/sections/gallery/blocks/02102023_Contour-1.png";
import block3 from "../../../images/sections/gallery/blocks/220823_Senergy-4 (1).png";
import block4 from "../../../images/sections/gallery/blocks/250823_Senergy-2-2.png";
import block5 from "../../../images/sections/gallery/blocks/250823_Senergy-3-2.png";
import block6 from "../../../images/sections/gallery/blocks/250823_Senergy-4-1.png";
import block7 from "../../../images/sections/gallery/blocks/28092023_Senergy-4.png";
import block8 from "../../../images/sections/gallery/blocks/28092023_Senergy-6.png";
import threeD1 from "../../../images/sections/gallery/3d/10112023_CadCam-1.png";
import threeD2 from "../../../images/sections/gallery/3d/image 67.png";
import threeD3 from "../../../images/sections/gallery/3d/220823_Senergy-4 (1).png";
import threeD4 from "../../../images/sections/gallery/3d/image 68.png";
import threeD5 from "../../../images/sections/gallery/3d/DSC_2928.jfif";
import SectionHeader from "../../UI/SectionHeader";
import Button from "../../UI/Button";
import ImageModal from "./ImageModal";

const titaniumBeams = [];
const crowns = [
  crown1,
  crown2,
  crown3,
  crown4,
  crown5,
  crown6,
  crown7,
  crown8,
  crown9,
];
const blocks = [block1, block2, block3, block4, block5, block6, block7, block8];
const fullAnatomy = [
  fullAnatomy0,
  fullAnatomy1,
  fullAnatomy2,
  fullAnatomy3,
  fullAnatomy4,
  fullAnatomy5,
  fullAnatomy6,
];
const threeDPrinting = [threeD1, threeD2, threeD3, threeD4, threeD5];
const all = [...fullAnatomy, ...crowns, ...blocks, ...threeDPrinting];

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
        return titaniumBeams;
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
