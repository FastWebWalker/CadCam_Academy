// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import x from "../../../images/sections/gallery/x.svg";
// import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";
// import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
// import { useMediaQuery } from "@mui/material";

// const ImageModal = ({ images, initialIndex, onClose }) => {
//   const [activeIndex, setActiveIndex] = useState(initialIndex);
//   const isMobile = useMediaQuery("(max-width:767px)");

//   const handleEscPress = (event) => {
//     if (event.key === "Escape") {
//       onClose();
//       // Add your custom logic here
//     }
//   };

//   useEffect(() => {
//     // Add event listener on component mount
//     window.addEventListener("keydown", handleEscPress);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("keydown", handleEscPress);
//     };
//   }, []);

//   useEffect(() => {
//     // Save current scroll position
//     const scrollPosition = window.pageYOffset;

//     // Prevent scrolling on mount
//     document.documentElement.style.overflow = "hidden";
//     document.body.style.overflow = "hidden";
//     document.body.style.position = "fixed";
//     document.body.style.top = `-${scrollPosition}px`;
//     document.body.style.width = "100%";

//     // Cleanup function
//     return () => {
//       // Re-enable scrolling on unmount
//       document.documentElement.style.overflow = "";
//       document.body.style.overflow = "";
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.width = "";

//       // Restore scroll position
//       window.scrollTo(0, scrollPosition);
//     };
//   }, []);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.activeIndex);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
//       <div className="w-full h-full relative flex flex-col">
//         <button
//           className="absolute top-4 right-4 text-white font-bold cursor-pointer z-40"
//           onClick={onClose}>
//           <img src={x} className="w-[28px] h-[28px]" alt="close-button" />
//         </button>

//         {isMobile && (
//           <div className="h-[50vh] flex justify-center items-end gap-6 py-8 px-4">
//             <button className="swiper-prev-gallery-modal w-full max-w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-redCustom text-white bg-redCustom transition-colors duration-300">
//               <img
//                 src={arrowLeft}
//                 alt="Previous"
//                 className="w-[24px] h-[24px] object-contain"
//               />
//             </button>
//             <button className="swiper-next-gallery-modal w-full max-w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-redCustom text-white bg-redCustom transition-colors duration-300">
//               <img
//                 src={arrowRight}
//                 alt="Next"
//                 className="w-[24px] h-[24px] object-contain"
//               />
//             </button>
//           </div>
//         )}

//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={20}
//           slidesPerView={1}
//           navigation={{
//             nextEl: ".swiper-next-gallery-modal",
//             prevEl: ".swiper-prev-gallery-modal",
//           }}
//           speed={1000}
//           loop={true}
//           onSlideChange={handleSlideChange}
//           initialSlide={activeIndex}
//           className="h-full w-full">
//           {/* Desktop Navigation Buttons */}
//           {!isMobile && (
//             <>
//               <button className="swiper-prev-gallery-modal z-50 absolute top-1/2 -translate-y-1/2 left-4 w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-white text-white hover:bg-redCustom hover:border-redCustom transition-colors duration-300">
//                 <img
//                   src={arrowLeft}
//                   alt="Previous"
//                   className="w-[24px] h-[24px] object-contain"
//                 />
//               </button>
//               <button className="swiper-next-gallery-modal z-50 absolute top-1/2 -translate-y-1/2 right-4 w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-white text-white hover:bg-redCustom hover:border-redCustom transition-colors duration-300">
//                 <img
//                   src={arrowRight}
//                   alt="Next"
//                   className="w-[24px] h-[24px] object-contain"
//                 />
//               </button>
//             </>
//           )}

//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className={`
//                  flex justify-center items-center
//                 ${
//                   isMobile
//                     ? "h-[calc(50vh - 160px)] w-[100%] mx-auto"
//                     : "h-full w-full"
//                 }
//               `}>
//                 <img
//                   src={image}
//                   alt={`Gallery image ${index + 1}`}
//                   className="sm:w-[70%] sm:h-auto sm:max-h-[70vh] w-[100%] h-[100%] object-contain object-center"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ImageModal;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import x from "../../../images/sections/gallery/x.svg";
import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";
import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
import { useMediaQuery } from "@mui/material";

const ImageModal = ({ images, initialIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const isMobile = useMediaQuery("(max-width:767px)");

  const handleEscPress = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscPress);

    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, []);

  useEffect(() => {
    const scrollPosition = window.pageYOffset;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollPosition);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="w-full h-full relative flex flex-col">
        <button
          className="absolute top-4 right-4 text-white font-bold cursor-pointer z-40"
          onClick={onClose}>
          <img src={x} className="w-[28px] h-[28px]" alt="close-button" />
        </button>

        {isMobile && (
          <div className="h-[40vh] flex justify-center items-end gap-6 py-8 px-4">
            <button className="swiper-prev-gallery-modal w-full max-w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-redCustom text-white bg-redCustom transition-colors duration-300">
              <img
                src={arrowLeft}
                alt="Previous"
                className="w-[24px] h-[24px] object-contain"
              />
            </button>
            <button className="swiper-next-gallery-modal w-full max-w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-redCustom text-white bg-redCustom transition-colors duration-300">
              <img
                src={arrowRight}
                alt="Next"
                className="w-[24px] h-[24px] object-contain"
              />
            </button>
          </div>
        )}

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-next-gallery-modal",
            prevEl: ".swiper-prev-gallery-modal",
          }}
          speed={1000}
          loop={true}
          onSlideChange={handleSlideChange}
          initialSlide={activeIndex}
          className="h-full w-full">
          {!isMobile && (
            <>
              <button className="swiper-prev-gallery-modal z-50 absolute top-1/2 -translate-y-1/2 left-4 w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-white text-white hover:bg-redCustom hover:border-redCustom transition-colors duration-300">
                <img
                  src={arrowLeft}
                  alt="Previous"
                  className="w-[24px] h-[24px] object-contain"
                />
              </button>
              <button className="swiper-next-gallery-modal z-50 absolute top-1/2 -translate-y-1/2 right-4 w-[80px] h-[40px] flex items-center justify-center rounded-[30px] border border-white text-white hover:bg-redCustom hover:border-redCustom transition-colors duration-300">
                <img
                  src={arrowRight}
                  alt="Next"
                  className="w-[24px] h-[24px] object-contain"
                />
              </button>
            </>
          )}

          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex justify-center items-center w-full ${
                  isMobile
                    ? "h-[calc(50vh - 160px)] [@media(max-width:500px)]:w-[100%] w-[70%] mx-auto"
                    : "h-full"
                }`}>
                <Zoom>
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="md:w-[70%] lg:w-[100%] md:h-auto sm:max-h-[70vh] mx-auto w-[100%] h-[100%]  object-contain"
                  />
                </Zoom>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageModal;
