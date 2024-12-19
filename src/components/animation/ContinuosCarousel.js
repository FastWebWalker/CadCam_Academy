import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import required Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import partner1 from "../../images/sections/trusted/partner-1.svg";
import partner2 from "../../images/sections/trusted/partner-2.svg";
import partner3 from "../../images/sections/trusted/partner-3.svg";
import partner4 from "../../images/sections/trusted/partner-4.svg";
import partner5 from "../../images/sections/trusted/partner-5.svg";
import partner6 from "../../images/sections/trusted/partner-6.svg";
import partner7 from "../../images/sections/trusted/partner-7.svg";
import partner8 from "../../images/sections/trusted/partner-8.svg";
import partner9 from "../../images/sections/trusted/partner-9.svg";
import partner10 from "../../images/sections/trusted/partner-10.svg";
import partner11 from "../../images/sections/trusted/partner-11.svg";
import partner12 from "../../images/sections/trusted/partner-12.svg";
import partner13 from "../../images/sections/trusted/partner-13.svg";
import partner14 from "../../images/sections/trusted/partner-14.svg";
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
    partner10,
    partner11,
    partner12,
    partner13,
    partner14,
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
