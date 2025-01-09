import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import x from "../../../images/sections/gallery/x.svg";
import NavigationArrow from "../../UI/NavigationArrow";
import { useMediaQuery } from "@mui/material";

const ImageModal = ({ images, initialIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const isMobile = useMediaQuery("(max-width:767px)");
  const isMobileSmall = useMediaQuery("(max-width: 450px");

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
    <div className="fixed top-0 left-0 w-full h-full bg-[#111111] bg-opacity-80 z-50 flex justify-center items-center">
      <div className="w-full h-full relative flex flex-col">
        <button
          className="absolute top-4 right-4 text-white font-bold cursor-pointer z-40"
          onClick={onClose}>
          <img src={x} className="w-[28px] h-[28px]" alt="close-button" />
        </button>

        {isMobile && (
          <div className="h-[40vh] flex justify-center items-end gap-6 py-8 px-4">
            <button className="swiper-prev-gallery-modal w-full max-w-[80px] h-[40px] flex items-center justify-center rounded-[30px] transition-colors duration-300">
              <NavigationArrow
                className={""}
                size={isMobileSmall ? 39 : 52}
                startColor={"#000000"}
                endColor={"#BA0315"}
                startBorderColor={"border-[#000000]"}
                endBorderColor={"border-[#BA0315]"}
                padding={"lg:p-[26px] md:p-[14px] p-[12.5px]"}
              />
            </button>
            <button className="swiper-next-gallery-modal w-full max-w-[80px] h-[40px] flex items-center justify-center rounded-[30px] transition-colors duration-300">
              <NavigationArrow
                className={"rotate-180"}
                size={isMobileSmall ? 39 : 52}
                startColor={"#000000"}
                endColor={"#BA0315"}
                startBorderColor={"border-[#000000]"}
                endBorderColor={"border-[#BA0315]"}
                padding={"lg:p-[26px] md:p-[14px] p-[12.5px]"}
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
              <button className="swiper-prev-gallery-modal z-50 absolute top-1/2 -translate-y-1/2 left-4 w-[80px] h-[40px] flex items-center justify-center rounded-[30px] transition-colors duration-300">
                <NavigationArrow
                  className={""}
                  size={isMobileSmall ? 39 : 52}
                  startColor={"#000000"}
                  endColor={"#BA0315"}
                  startBorderColor={"border-[#000000]"}
                  endBorderColor={"border-[#BA0315]"}
                  padding={"lg:p-[26px] md:p-[14px] p-[12.5px]"}
                />
              </button>
              <button className="swiper-next-gallery-modal z-50 absolute top-1/2 -translate-y-1/2 right-4 w-[80px] h-[40px] flex items-center justify-center rounded-[30px]  transition-colors duration-300">
                <NavigationArrow
                  className={"rotate-180"}
                  size={isMobileSmall ? 39 : 52}
                  startColor={"#000000"}
                  endColor={"#BA0315"}
                  startBorderColor={"border-[#000000]"}
                  endBorderColor={"border-[#BA0315]"}
                  padding={"lg:p-[26px] md:p-[14px] p-[12.5px]"}
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
