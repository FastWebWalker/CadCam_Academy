// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import ContentContainer from "../../UI/ContentContainer";
// import SectionHeader from "../../UI/SectionHeader";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import review1 from "../../../images/sections/reviews/1.png";
// import review2 from "../../../images/sections/reviews/2.jpg";
// import review3 from "../../../images/sections/reviews/3.png";

// import { useMediaQuery } from "@mui/material";
// import { useTranslation } from "react-i18next";

// // Assuming NavigationArrow is defined in the same directory
// import NavigationArrow from "../../UI/NavigationArrow";

// const NavigationButtons = () => {
//   const isMobile = useMediaQuery("(max-width: 450px)");
//   return (
//     <div className="flex gap-[10px]">
//       <div className="custom-swiper-prev-reviews">
//         <NavigationArrow
//           startBorderColor={"border-[#979797]"}
//           endBorderColor={"border-[#BA0315]"}
//           startColor={"#979797"}
//           endColor={"#BA0315"}
//           size={isMobile ? 34 : 52}
//           padding={"lg:p-[26px] md:p-[14px] p-[12.5px]"}
//         />
//       </div>
//       <div className="custom-swiper-next-reviews">
//         <NavigationArrow
//           className="rotate-180"
//           startBorderColor={"border-[#979797]"}
//           endBorderColor={"border-[#BA0315]"}
//           startColor={"#979797"}
//           endColor={"#BA0315"}
//           size={isMobile ? 34 : 52}
//           padding={"lg:p-[26px] md:p-[14px] p-[12.5px]"}
//         />
//       </div>
//     </div>
//   );
// };

// export default function ReviewsSection() {
//   const isLargeDesktop = useMediaQuery("(min-width:1280px)");
//   const isNotDesktop = useMediaQuery("(max-width: 768px)");
//   const slides = isLargeDesktop ? 2 : 1;
//   const { t } = useTranslation();

//   const reviews = [
//     {
//       name: `${t("reviewsSection.reviews.0.name")}`,
//       position: `${t("reviewsSection.reviews.0.position")}`,
//       image: review1,
//       quote: `${t("reviewsSection.reviews.0.quote")}`,
//     },
//     {
//       name: `${t("reviewsSection.reviews.1.name")}`,
//       position: `${t("reviewsSection.reviews.1.position")}`,
//       image: review2,
//       quote: `${t("reviewsSection.reviews.1.quote")}`,
//     },
//     {
//       name: `${t("reviewsSection.reviews.2.name")}`,
//       position: `${t("reviewsSection.reviews.2.position")}`,
//       image: review3,
//       quote: `${t("reviewsSection.reviews.2.quote")}`,
//     },
//   ];

//   // Animation variant for the section (triggers only once)
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   // IntersectionObserver for the section (triggerOnce: true)
//   const { ref: sectionRef, inView: sectionInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   // IntersectionObserver for repeated animations (e.g., title, buttons)
//   const { ref: contentRef, inView: contentInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <motion.section
//       id="reviews"
//       className="lg:py-16 md:py-[30px] py-[20px] bg-[#111111]">
//       <ContentContainer>
//         <div className="relative" ref={contentRef}>
//           {/* Swiper Component */}
//           <SectionHeader
//             titleFirstPart={t("reviewsSection.title1")}
//             titleSecondPart={t("reviewsSection.title2")}
//             isDescription={false}
//             inView={true}
//             textIsWhite={true}
//             titlePl={"lg:pl-[30%]"}
//             descriptionPart={<NavigationButtons />}
//           />
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={72}
//             slidesPerView={slides}
//             navigation={{
//               nextEl: ".custom-swiper-next-reviews",
//               prevEl: ".custom-swiper-prev-reviews",
//               enabled: true,
//               hideOnClick: false,
//             }}
//             autoplay={{
//               delay: 3000, // No delay between transitions
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             pagination={{
//               clickable: true,
//               el: ".swiper-custom-pagination-reviews",
//               bulletClass: "swiper-custom-bullet-reviews",
//               bulletActiveClass: "swiper-custom-bullet-active",
//             }}
//             loop={true}
//             autoHeight={true}
//             speed={1000}
//             className="reviews-swiper">
//             {reviews.map((review, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex gap-[21px] sm:flex-row flex-col-reverse">
//                   <div className="flex-shrink-0">
//                     <img
//                       src={review.image}
//                       alt={review.name}
//                       className="md:w-[250px] md:h-[196px] w-full h-auto max-h-[250px] md:object-cover object-cover rounded-sm grayscale"
//                     />
//                   </div>

//                   <div className="flex flex-col justify-between">
//                     <p className="flex-1 text-white leading-tight mb-[26px]">
//                       “{review.quote}”
//                     </p>
//                     <div>
//                       <h3 className="flex-1 text-white text-[26px] font-normal ">
//                         {review.name}
//                       </h3>
//                       <p className="text-white text-[20px]">
//                         {review.position}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Pagination Container */}
//           {isNotDesktop && (
//             <div className="swiper-custom-pagination-reviews gap-[4px] flex justify-center lg:mt-[52px] md:mt-[30px] mt-[20px]"></div>
//           )}
//         </div>
//       </ContentContainer>

//       {/* Custom Styles */}
//       <style jsx global>{`
//         .swiper-button-next,
//         .swiper-button-prev {
//           display: none !important;
//         }

//         .reviews-swiper {
//           overflow: hidden;
//         }

//         /* Custom Pagination Styles */
//         .swiper-custom-bullet-reviews {
//           width: 9px;
//           height: 9px;
//           display: inline-block;
//           background: #464646;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border-radius: 50%;
//         }

//         .swiper-custom-bullet-active {
//           background: #ba0315;
//         }
//       `}</style>
//     </motion.section>
//   );
// }

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import review1 from "../../../images/sections/reviews/1.png";
import review2 from "../../../images/sections/reviews/2.jpg";
import review3 from "../../../images/sections/reviews/3.png";

import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

import NavigationArrow from "../../UI/NavigationArrow";

const NavigationButtons = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");
  return (
    <div className="flex gap-[10px]">
      <div className="custom-swiper-prev-reviews">
        <NavigationArrow
          startBorderColor={"border-[#979797]"}
          endBorderColor={"border-[#BA0315]"}
          startColor={"#979797"}
          endColor={"#BA0315"}
          size={isMobile ? 34 : 52}
          padding={"lg:p-[26px] md:p-[14px] p-[12.5px]"}
        />
      </div>
      <div className="custom-swiper-next-reviews">
        <NavigationArrow
          className="rotate-180"
          startBorderColor={"border-[#979797]"}
          endBorderColor={"border-[#BA0315]"}
          startColor={"#979797"}
          endColor={"#BA0315"}
          size={isMobile ? 34 : 52}
          padding={"lg:p-[26px] md:p-[14px] p-[12.5px]"}
        />
      </div>
    </div>
  );
};

export default function ReviewsSection() {
  const isLargeDesktop = useMediaQuery("(min-width:1280px)");
  const isNotDesktop = useMediaQuery("(max-width: 768px)");
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
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={sectionRef}
      id="reviews"
      className="lg:py-16 md:py-[30px] py-[20px] bg-[#111111]"
      variants={sectionVariants}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}>
      <ContentContainer>
        <div className="relative">
          <SectionHeader
            titleFirstPart={t("reviewsSection.title1")}
            titleSecondPart={t("reviewsSection.title2")}
            isDescription={false}
            inView={true}
            textIsWhite={true}
            titlePl={"lg:pl-[30%]"}
            descriptionPart={<NavigationButtons />}
          />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={72}
            slidesPerView={slides}
            navigation={{
              nextEl: ".custom-swiper-next-reviews",
              prevEl: ".custom-swiper-prev-reviews",
            }}
            autoplay={{
              delay: 3000,
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
            autoHeight={true}
            speed={1000}
            className="reviews-swiper">
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="flex gap-[21px] sm:flex-row flex-col-reverse"
                  variants={slideVariants}
                  initial="hidden"
                  animate={sectionInView ? "visible" : "hidden"}>
                  <div className="flex-shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="md:w-[250px] md:h-[196px] w-full h-auto max-h-[250px] md:object-cover object-cover rounded-sm grayscale"
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
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {isNotDesktop && (
            <div className="swiper-custom-pagination-reviews gap-[4px] flex justify-center lg:mt-[52px] md:mt-[30px] mt-[20px]"></div>
          )}
        </div>
      </ContentContainer>
    </motion.section>
  );
}
