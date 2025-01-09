import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import required Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import partner1 from "../../images/sections/trusted/partner1.svg";
import partner2 from "../../images/sections/trusted/partner2.svg";
import partner3 from "../../images/sections/trusted/partner3.svg";
import partner4 from "../../images/sections/trusted/partner4.svg";
import partner5 from "../../images/sections/trusted/partner5.svg";
import partner6 from "../../images/sections/trusted/partner6.svg";
import partner7 from "../../images/sections/trusted/partner7.svg";
import partner8 from "../../images/sections/trusted/partner8.svg";
import partner9 from "../../images/sections/trusted/partner9.svg";

import { useMediaQuery } from "@mui/material";

const SwiperCarousel = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:625px) and (max-width:1023px)");
  const isMobile = useMediaQuery("(max-width:767px)");

  const slides = isDesktop ? 7 : isTablet ? 5 : 3;
  const images = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
  ];

  // Duplicate images to ensure smooth looping
  const multipleImages = [...images, ...images];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={slides}
      loop={true}
      speed={3000}
      autoplay={{
        delay: 0, // No delay between transitions
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      watchSlidesProgress={true}
      className="mySwiper">
      {multipleImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center gap-[24px]">
            <img
              src={image}
              alt={`Partner ${index + 1}`}
              className="w-full lg:h-[184px] object-center opacity-100"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
