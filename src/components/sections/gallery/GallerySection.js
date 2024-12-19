// import React, { useEffect, useState } from "react";
// import ContentContainer from "../../UI/ContentContainer";
// import Description from "../../UI/Description";
// import Title from "../../UI/Title";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import logo1 from "../../../images/sections/gallery/logo1.svg";
// import logo2 from "../../../images/sections/gallery/logo2.svg";
// import logo3 from "../../../images/sections/gallery/logo3.svg";
// import logo4 from "../../../images/sections/gallery/logo4.svg";
// import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";
// import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
// import { cadcam } from "../../../data/images/cadcam";
// import { cadStudio } from "../../../data/images/cadStudio";
// import { contour } from "../../../data/images/contour";
// import { senergy } from "../../../data/images/senergy";
// import ImageModal from "./ImageModal";
// import "./arrow-icon-swiper.css";
// import { useMediaQuery } from "@mui/material";
// import { useTranslation } from "react-i18next";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const logos = [
//   { name: "contour", image: logo1 },
//   { name: "senergy", image: logo2 },
//   { name: "cadcam", image: logo3 },
//   { name: "cadStudio", image: logo4 },
// ];

// const GallerySection = () => {
//   const [currentCompany, setCurrentCompany] = useState("contour");
//   const [currentImages, setCurrentImages] = useState(contour);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { t } = useTranslation();

//   const isMobile = useMediaQuery("(max-width:767px)");

//   function handleSelectData() {
//     switch (currentCompany) {
//       case "contour":
//         setCurrentImages(contour);
//         setCurrentImageIndex(0);
//         break;
//       case "cadStudio":
//         setCurrentImages(cadStudio);
//         setCurrentImageIndex(0);
//         break;
//       case "cadcam":
//         setCurrentImages(cadcam);
//         setCurrentImageIndex(0);
//         break;
//       case "senergy":
//         setCurrentImages(senergy);
//         setCurrentImageIndex(0);
//         break;
//       default:
//         return [];
//     }
//   }

//   useEffect(() => {
//     handleSelectData();
//   }, [currentCompany]);

//   const handleImageClick = (index) => {
//     setCurrentImageIndex(index);
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <section className="lg:py-[90px] md:py-[60px] py-[30px]">
//       <ContentContainer>
//         <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-2 gap-y-[24px] mb-[46px]">
//           <Title>{t("gallerySection.title")}</Title>
//           <Description className="lg:max-w-[437px] lg:text-right">
//             {t("gallerySection.description")}
//           </Description>
//         </div>

//         <div className="flex items-center md:justify-center sm:justify-between justify-center  lg:gap-[140px] gap-[35px] lg:mb-[32px] md:flex-nowrap flex-wrap mb-[32px]">
//           {logos.map((logo) => (
//             <button onClick={() => setCurrentCompany(logo.name)}>
//               <img src={logo.image} alt={logo.name} />
//             </button>
//           ))}
//         </div>
//       </ContentContainer>

//       <div className="relative z-0 ">
//         {isMobile && (
//           <ContentContainer>
//             <div className="flex gap-[24px] mb-[16px]">
//               <button className="swiper-prev-gallery group  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-black hover:bg-redCustom hover:text-white transition-colors duration-300 z-10">
//                 <img
//                   src={arrowLeft}
//                   className="arrow-icon filter brightness-0 group-hover:brightness-100"
//                   alt="arrow-left"
//                 />
//               </button>
//               <button className="swiper-next-gallery group    flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-white hover:bg-redCustom transition-colors duration-300 z-10">
//                 <img
//                   src={arrowRight}
//                   className="arrow-icon filter brightness-0 group-hover:brightness-100"
//                   alt="arrow-right"
//                 />
//               </button>
//             </div>
//           </ContentContainer>
//         )}

//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={30}
//           slidesPerView={1}
//           centeredSlides={true}
//           navigation={{
//             nextEl: ".swiper-next-gallery",
//             prevEl: ".swiper-prev-gallery",
//             enabled: true,
//             hideOnClick: false,
//           }}
//           loop={true}
//           speed={1000}
//           className="gallery-swiper"
//           breakpoints={{
//             // Mobile first approach
//             320: {
//               slidesPerView: 1,
//               spaceBetween: "10%",
//             },
//             // Tablet
//             640: {
//               slidesPerView: 1,
//               spaceBetween: "10%",
//             },
//             // Desktop
//             1024: {
//               slidesPerView: 1,
//               spaceBetween: "10%",
//             },
//             // Large Desktop
//             1280: {
//               slidesPerView: 2.5,
//               spaceBetween: 30,
//             },
//           }}
//           onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}>
//           {!isMobile && (
//             <button className="swiper-prev-gallery group absolute xl:left-[calc(25%-1.25%)] left-[3%] top-1/2  -translate-y-1/2  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-black hover:bg-redCustom hover:text-white transition-colors duration-300 z-10">
//               <img
//                 src={arrowLeft}
//                 className="arrow-icon filter brightness-0 group-hover:brightness-100"
//                 alt="arrow-left"
//               />
//             </button>
//           )}
//           {currentImages.map((image, index) => (
//             <SwiperSlide
//               onClick={() => handleImageClick(index)}
//               key={index}
//               className="transition-opacity duration-500 z-50 cursor-pointer">
//               {({ isActive }) => (
//                 <div
//                   className={`transition-all duration-500
//                     relative overflow-hidden flex justify-center
//                     ${
//                       isActive
//                         ? "opacity-100 scale-100"
//                         : " scale-[0.70] transition-all duration-500"
//                     }
//                   `}>
//                   <img
//                     src={image}
//                     alt={`Gallery image ${index + 1}`}
//                     className="xl:w-full md:w-[65.6%] w-[90%] md:h-[400px] h-[300px] object-cover z-50"
//                   />
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//           {!isMobile && (
//             <button className="swiper-next-gallery group absolute xl:right-[calc(25%-1.25%)] right-[3%] top-1/2 -translate-y-1/2  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-white hover:bg-redCustom transition-colors duration-300 z-10">
//               <img
//                 src={arrowRight}
//                 className="arrow-icon filter brightness-0 group-hover:brightness-100"
//                 alt="arrow-right"
//               />
//             </button>
//           )}
//         </Swiper>
//       </div>
//       {isModalOpen && (
//         <ImageModal
//           images={currentImages}
//           initialIndex={currentImageIndex}
//           onClose={handleModalClose}
//         />
//       )}
//     </section>
//   );
// };

// export default GallerySection;

import React, { useEffect, useState, useRef } from "react";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import logo1 from "../../../images/sections/gallery/logo1.svg";
import logo2 from "../../../images/sections/gallery/logo2.svg";
import logo3 from "../../../images/sections/gallery/logo3.svg";
import logo4 from "../../../images/sections/gallery/logo4.svg";
import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";
import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
import { cadcam } from "../../../data/images/cadcam";
import { cadStudio } from "../../../data/images/cadStudio";
import { contour } from "../../../data/images/contour";
import { senergy } from "../../../data/images/senergy";
import ImageModal from "./ImageModal";
import "./arrow-icon-swiper.css";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, transform } from "framer-motion";
import { useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const logos = [
  { name: "contour", image: logo1 },
  { name: "senergy", image: logo2 },
  { name: "cadcam", image: logo3 },
  { name: "cadStudio", image: logo4 },
];

const GallerySection = () => {
  const [currentCompany, setCurrentCompany] = useState("contour");
  const [currentImages, setCurrentImages] = useState(contour);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const logosRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isLogosInView = useInView(logosRef, { once: true, margin: "-100px" });

  const isMobile = useMediaQuery("(max-width:767px)");

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  function handleSelectData() {
    switch (currentCompany) {
      case "contour":
        setCurrentImages(contour);
        setCurrentImageIndex(0);
        break;
      case "cadStudio":
        setCurrentImages(cadStudio);
        setCurrentImageIndex(0);
        break;
      case "cadcam":
        setCurrentImages(cadcam);
        setCurrentImageIndex(0);
        break;
      case "senergy":
        setCurrentImages(senergy);
        setCurrentImageIndex(0);
        break;
      default:
        return [];
    }
  }

  useEffect(() => {
    handleSelectData();
  }, [currentCompany]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      ref={sectionRef}
      className="lg:py-[90px] md:py-[60px] py-[30px]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}>
      <ContentContainer>
        <motion.div
          ref={headerRef}
          className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-2 gap-y-[24px] mb-[46px]"
          variants={headerVariants}>
          <motion.div variants={headerVariants}>
            <Title>{t("gallerySection.title")}</Title>
          </motion.div>
          <motion.div variants={headerVariants}>
            <Description className="lg:max-w-[437px] lg:text-right">
              {t("gallerySection.description")}
            </Description>
          </motion.div>
        </motion.div>

        <motion.div
          ref={logosRef}
          className="flex items-center md:justify-center sm:justify-between justify-center lg:gap-[140px] gap-[35px] lg:mb-[32px] md:flex-nowrap flex-wrap mb-[32px]"
          initial="hidden"
          animate={isLogosInView ? "visible" : "hidden"}>
          {logos.map((logo, index) => (
            <motion.button
              key={logo.name}
              onClick={() => setCurrentCompany(logo.name)}
              custom={index}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
              variants={buttonVariants}
              className={`relative [@media(max-width:430px)]:w-[125px] [@media(max-width:430px)]:h-[60px] ${
                currentCompany === logo.name ? "border-left" : ""
              }`}>
              <img
                src={logo.image}
                alt={logo.name}
                className={`transition-all duration-500 ${
                  currentCompany === logo.name
                    ? "border-l-[0.5px] border-[#A40004] pl-1 border-opacity-50 h-full"
                    : ""
                }`}
              />
            </motion.button>
          ))}
        </motion.div>
      </ContentContainer>

      <div className="relative z-0">
        {isMobile && (
          <ContentContainer>
            <div className="flex [@media(max-width:450px)]:justify-center justify-between gap-[24px] mb-[16px]">
              <motion.button
                className="swiper-prev-gallery group flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-black hover:bg-redCustom hover:text-white transition-colors duration-300 z-10"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}>
                <img
                  src={arrowLeft}
                  className="arrow-icon filter brightness-0 group-hover:brightness-100"
                  alt="arrow-left"
                />
              </motion.button>
              <motion.button
                className="swiper-next-gallery group flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-white hover:bg-redCustom transition-colors duration-300 z-10"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}>
                <img
                  src={arrowRight}
                  className="arrow-icon filter brightness-0 group-hover:brightness-100"
                  alt="arrow-right"
                />
              </motion.button>
            </div>
          </ContentContainer>
        )}

        <AnimatePresence mode="wait">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              nextEl: ".swiper-next-gallery",
              prevEl: ".swiper-prev-gallery",
              enabled: true,
              hideOnClick: false,
            }}
            loop={true}
            speed={1000}
            className="gallery-swiper"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: "10%" },
              640: { slidesPerView: 1, spaceBetween: "10%" },
              1024: { slidesPerView: 1, spaceBetween: "10%" },
              1280: { slidesPerView: 2.5, spaceBetween: 30 },
            }}
            onSlideChange={(swiper) =>
              setCurrentImageIndex(swiper.activeIndex)
            }>
            {!isMobile && (
              <motion.button
                className="swiper-prev-gallery group absolute xl:left-[calc(25%-1.25%)] left-[3%] top-[47%] flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-black hover:bg-redCustom hover:text-white transition-colors duration-300 z-10"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <img
                  src={arrowLeft}
                  className="arrow-icon filter brightness-0 group-hover:brightness-100"
                  alt="arrow-left"
                />
              </motion.button>
            )}
            {currentImages.map((image, index) => (
              <SwiperSlide
                onClick={() => handleImageClick(index)}
                key={index}
                className="transition-opacity duration-500 z-50 cursor-pointer">
                {({ isActive }) => (
                  <motion.div
                    className={`transition-all duration-500 relative overflow-hidden flex justify-center ${
                      isActive ? "opacity-100 scale-100" : "scale-[0.70]"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 0.7,
                      scale: isActive ? 1 : 0.7,
                      transition: { duration: 0.5 },
                    }}
                    whileHover={{ scale: isActive ? 1.02 : 0.72 }}>
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="xl:w-full md:w-[65.6%] w-[90%] md:h-[400px] h-[300px] object-cover z-50"
                    />
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
            {!isMobile && (
              <motion.button
                className="swiper-next-gallery group absolute xl:right-[calc(25%-1.25%)] right-[3%] top-[47%]  flex items-center justify-center w-20 h-10 rounded-[30px] border border-redCustom text-white hover:bg-redCustom transition-colors duration-300 z-10"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <img
                  src={arrowRight}
                  className="arrow-icon filter brightness-0 group-hover:brightness-100"
                  alt="arrow-right"
                />
              </motion.button>
            )}
          </Swiper>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <ImageModal
            images={currentImages}
            initialIndex={currentImageIndex}
            onClose={handleModalClose}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default GallerySection;
