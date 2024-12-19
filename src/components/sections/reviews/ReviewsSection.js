import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ContentContainer from "../../UI/ContentContainer";
import Title from "../../UI/Title";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import review1 from "../../../images/sections/reviews/image1.png";
import review2 from "../../../images/sections/reviews/image2.png";
import review3 from "../../../images/sections/reviews/image3.png";
import review4 from "../../../images/sections/reviews/image4.png";
import arrowRight from "../../../images/sections/reviews/arrow-right.svg";
import arrowLeft from "../../../images/sections/reviews/arrow-left.svg";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ReviewsSection() {
  const isLargeDesktop = useMediaQuery("(min-width:1280px)");
  const slides = isLargeDesktop ? 2 : 1;
  const { t } = useTranslation();

  const reviews = [
    {
      name: `${t("reviewsSection.reviews.0.name")}`,
      position: `${t("reviewsSection.reviews.0.position")}`,
      image: review1,
      quote: `${t("reviewsSection.reviews.0.quote")}`,
    },
    {
      name: `${t("reviewsSection.reviews.1.name")}`,
      position: `${t("reviewsSection.reviews.1.position")}`,
      image: review2,
      quote: `${t("reviewsSection.reviews.1.quote")}`,
    },
    {
      name: `${t("reviewsSection.reviews.2.name")}`,
      position: `${t("reviewsSection.reviews.2.position")}`,
      image: review3,
      quote: `${t("reviewsSection.reviews.2.quote")}`,
    },
    {
      name: `${t("reviewsSection.reviews.3.name")}`,
      position: `${t("reviewsSection.reviews.3.position")}`,
      image: review4,
      quote: `${t("reviewsSection.reviews.3.quote")}`,
    },
  ];

  // Animation variant for the section (triggers only once)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // IntersectionObserver for the section (triggerOnce: true)
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // IntersectionObserver for repeated animations (e.g., title, buttons)
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      id="reviews"
      ref={sectionRef} // Attach observer to the section
      className="lg:py-16 md:py-[30px] py-[20px] bg-[#111111]"
      variants={sectionVariants}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"} // Trigger animation only once
    >
      <ContentContainer>
        <div className="relative" ref={contentRef}>
          <div className="flex items-center justify-between lg:mb-12 md:mb-[40px] mb-[32px] flex-wrap gap-[24px]">
            {/* Title Animation */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={
                contentInView
                  ? { opacity: 1, x: 0, transition: { duration: 0.6 } }
                  : { opacity: 0, x: -50 }
              }>
              <Title>{t("reviewsSection.title")}</Title>
            </motion.div>

            {/* Custom Navigation Buttons */}
            <div className="relative flex gap-[6px] justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer swiper-prev flex items-center justify-center w-20 h-10 rounded-[30px] border border-[rgba(255,255,255,0.4)] text-white hover:bg-redCustom hover:border-redCustom transition-colors duration-300">
                <img src={arrowLeft} alt="arrow-left" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="swiper-next flex items-center justify-center w-20 h-10 rounded-[30px] cursor-pointer border border-[rgba(255,255,255,0.4)] text-white hover:bg-redCustom hover:border-redCustom transition-colors duration-300">
                <img src={arrowRight} alt="arrow-right" />
              </motion.button>
            </div>
          </div>

          {/* Swiper Component */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={72}
            slidesPerView={slides}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              enabled: true,
              hideOnClick: false,
            }}
            autoplay={{
              delay: 3000, // No delay between transitions
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination-reviews",
              bulletClass: "swiper-custom-bullet-reviews",
              bulletActiveClass: "swiper-custom-bullet-active",
            }}
            loop={true}
            speed={1000}
            className="reviews-swiper">
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="flex gap-[21px] sm:flex-row flex-col-reverse">
                  <div className="flex-shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <p className="flex-1 text-white leading-tight mb-[26px]">
                      “{review.quote}”
                    </p>
                    <div>
                      <h3 className="flex-1 text-white text-[26px] font-normal ">
                        {review.name}
                      </h3>
                      <p className="text-white text-[20px]">
                        {review.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="swiper-custom-pagination-reviews flex justify-center lg:mt-[52px] md:mt-[30px] mt-[20px]"></div>
        </div>
      </ContentContainer>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }

        .reviews-swiper {
          overflow: hidden;
        }

        /* Custom Pagination Styles */
        .swiper-custom-bullet-reviews {
          width: 37px;
          height: 1.5px;
          margin: 0 4px;
          display: inline-block;
          opacity: 0.5;
          background: #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        /* Custom Pagination Styles */
        .swiper-custom-bullet-products {
          width: 37px;
          height: 1.5px;
          margin: 0 4px;
          display: inline-block;
          opacity: 0.5;
          background: #191919;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-custom-bullet-active {
          opacity: 1;
          background: #a40004;
        }
      `}</style>
    </motion.section>
  );
}
