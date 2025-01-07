import React, { useState } from "react";
import { motion, AnimatePresence, inView } from "framer-motion";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
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

const logos = [
  "All Photos",
  "Titanium beams",
  "Crowns",
  "Blocks",
  "Full Anatomy",
  "3D Printing",
];

const GallerySection = () => {
  const [currentCompany, setCurrentCompany] = useState("Full Anatomy");
  const { t } = useTranslation();

  const getImagesForCompany = (company) => {
    switch (company) {
      case "All Photos":
        return all;
      case "Titanium beams":
        return titaniumBeams;
      case "Crowns":
        return crowns;
      case "Blocks":
        return blocks;
      case "Full Anatomy":
        return fullAnatomy;
      case "3D Printing":
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

  return (
    <section className="py-12 bg-white">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={"gallery of"}
          titleSecondPart={"our works"}
          isDescription={true}
          description={
            "View all our work and see for yourself our professional skills!"
          }
          inView={true}
          titlePl={"lg:pl-[40%]"}
        />
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {logos.map((logo) => (
            <button
              key={logo.name}
              onClick={() => setCurrentCompany(logo)}
              className={`relative transition-all duration-300 px-4 py-2 ${
                currentCompany === logo.name
                  ? "border-l-2 border-redCustom"
                  : ""
              }`}>
              <div>{logo}</div>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getImagesForCompany(currentCompany).map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </ContentContainer>
    </section>
  );
};

export default GallerySection;
