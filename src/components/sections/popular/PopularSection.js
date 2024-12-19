// import ContentContainer from "../../UI/ContentContainer";
// import Description from "../../UI/Description";
// import Title from "../../UI/Title";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import image1 from "../../../images/sections/popular/image1.jpg";
// import image2 from "../../../images/sections/popular/image2.jpg";
// import Button from "../../UI/Button";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// export default function PopularSection() {
//   const { t } = useTranslation();
//   const ref = useRef(null); // Section reference for in-view detection
//   const isInView = useInView(ref, { once: true }); // Check if the section is visible

//   const popular = [
//     {
//       image: image1,
//       title: `${t("popularSection.products.0.title")}`,
//       description: `${t("popularSection.products.0.description")}`,
//       url: "https://www.setrade.com.ua/product/ameralabs-dmd-21/",
//     },
//     {
//       image: image2,
//       title: `${t("popularSection.products.1.title")}`,
//       description: `${t("popularSection.products.1.description")}`,
//       url: "https://www.setrade.com.ua/product/smile-line-palitra-slimpad-pro-dlia-zamishuvannia-keramiky-chorna/",
//     },
//   ];

//   return (
//     <motion.section
//       ref={ref}
//       className="bg-white lg:pb-[90px] md:pb-[60px] pb-[40px]"
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}>
//       <ContentContainer>
//         <motion.div
//           className="flex justify-between md:flex-row flex-col md:items-center items-start gap-2"
//           initial={{ opacity: 0, y: -20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.8, delay: 0.2 }}>
//           <Title>{t("popularSection.title")}</Title>
//           <Description className="text-[#191919] md:max-w-[437px] md:text-right text-left">
//             {t("popularSection.description")}
//           </Description>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={
//             isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
//           }
//           transition={{ duration: 0.8, delay: 0.4 }}>
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             spaceBetween={72}
//             slidesPerView={1}
//             navigation={{
//               nextEl: ".swiper-next",
//               prevEl: ".swiper-prev",
//               enabled: true,
//               hideOnClick: false,
//             }}
//             autoHeight
//             autoplay={{
//               delay: 2000, // No delay between transitions
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             pagination={{
//               clickable: true,
//               el: ".swiper-custom-pagination",
//               bulletClass: "swiper-custom-bullet-products",
//               bulletActiveClass: "swiper-custom-bullet-active",
//             }}
//             loop={false}
//             speed={1000}
//             className="popular-swiper">
//             {popular.map((item, index) => (
//               <SwiperSlide key={index} className="flex !important">
//                 <motion.div
//                   className="flex justify-between md:flex-row flex-col items-center gap-2 pt-[42px]"
//                   initial={{ opacity: 0, x: 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8 }}>
//                   <div className="flex-grow-0 flex-shrink-1 lg:flex-basis-[33.89%] lg:w-[33.89%] flex-basis-[50%] w-[100%] sm:w-[50%] flex justify-center items-center">
//                     <motion.img
//                       src={item.image}
//                       alt={item.title}
//                       initial={{ scale: 0.95 }}
//                       animate={{ scale: 1 }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                     />
//                   </div>

//                   <div className="flex-grow-0 flex-shrink-1 lg:flex-basis-[59.11%] flex-basis-[50%] flex flex-col justify-between gap-[32px]">
//                     <h3 className="text-[32px] leading-[38.73px] font-normal">
//                       {item.title}
//                     </h3>
//                     <Description className="max-w-[804px]">
//                       {item.description}
//                     </Description>
//                     <div className="flex-grow-0 md:mb-1 mb-[56px]">
//                       <Link
//                         to={item.url}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                         <motion.button
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.95 }}>
//                           <Button variant="black-red">
//                             {t("popularSection.button")}
//                           </Button>
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Pagination Container */}
//           <div className="swiper-custom-pagination flex md:justify-center justify-start mt-[30px]"></div>
//         </motion.div>
//       </ContentContainer>
//     </motion.section>
//   );
// }

import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import Title from "../../UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../../images/sections/popular/image1.jpg";
import image2 from "../../../images/sections/popular/image2.jpg";
import Button from "../../UI/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function PopularSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const isInView2 = useInView(ref, { once: false });
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Use useEffect to handle autoplay control
  useEffect(() => {
    if (swiperInstance?.autoplay) {
      if (isInView2) {
        swiperInstance.autoplay.start();
      } else {
        swiperInstance.autoplay.stop();
      }
    }
  }, [isInView2, swiperInstance]);

  const popular = [
    {
      image: image1,
      title: `${t("popularSection.products.0.title")}`,
      description: `${t("popularSection.products.0.description")}`,
      url: "https://www.setrade.com.ua/product/ameralabs-dmd-21/",
    },
    {
      image: image2,
      title: `${t("popularSection.products.1.title")}`,
      description: `${t("popularSection.products.1.description")}`,
      url: "https://www.setrade.com.ua/product/smile-line-palitra-slimpad-pro-dlia-zamishuvannia-keramiky-chorna/",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="bg-white lg:pb-[90px] md:pb-[60px] pb-[40px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <ContentContainer>
        <motion.div
          className="flex justify-between md:flex-row flex-col md:items-center items-start gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <Title>{t("popularSection.title")}</Title>
          <Description className="text-[#191919] md:max-w-[437px] md:text-right text-left">
            {t("popularSection.description")}
          </Description>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={72}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              enabled: true,
              hideOnClick: false,
            }}
            autoHeight
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
              bulletClass: "swiper-custom-bullet-products",
              bulletActiveClass: "swiper-custom-bullet-active",
            }}
            loop={false}
            speed={1000}
            className="popular-swiper"
            onSwiper={setSwiperInstance}>
            {popular.map((item, index) => (
              <SwiperSlide key={index} className="flex !important">
                <motion.div
                  className="flex justify-between md:flex-row flex-col items-center gap-2 pt-[42px]"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}>
                  <div className="flex-grow-0 flex-shrink-1 lg:flex-basis-[33.89%] lg:w-[33.89%] flex-basis-[50%] w-[100%] sm:w-[50%] flex justify-center items-center">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>

                  <div className="flex-grow-0 flex-shrink-1 lg:flex-basis-[59.11%] flex-basis-[50%] flex flex-col justify-between gap-[32px]">
                    <h3 className="text-[32px] leading-[38.73px] font-normal">
                      {item.title}
                    </h3>
                    <Description className="max-w-[804px]">
                      {item.description}
                    </Description>
                    <div className="flex-grow-0 md:mb-1 mb-[56px]">
                      <Link
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.95 }}>
                          <Button variant="black-red">
                            {t("popularSection.button")}
                          </Button>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="swiper-custom-pagination flex md:justify-center justify-start mt-[30px]"></div>
        </motion.div>
      </ContentContainer>
    </motion.section>
  );
}
