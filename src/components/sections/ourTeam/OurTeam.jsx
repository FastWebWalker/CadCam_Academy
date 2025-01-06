import ContentContainer from "../../UI/ContentContainer";
import NavigationArrow from "../../UI/NavigationArrow";
import SectionHeader from "../../UI/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import Description from "../../UI/Description";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useMediaQuery } from "@mui/material";

import { useTranslation } from "react-i18next";
import image1 from "../../../images/sections/ourTeam/1.png";
import image2 from "../../../images/sections/ourTeam/2.png";
import image3 from "../../../images/sections/ourTeam/3.png";

const NavigationButtons = () => {
  return (
    <div className="flex gap-[10px]">
      <div className="custom-swiper-prev-team">
        <NavigationArrow
          startColor={"#ffffff"}
          endColor={"#BA0315"}
          size={52}
          padding={26}
        />
      </div>
      <div className="custom-swiper-next-team">
        <NavigationArrow
          className="rotate-180"
          startColor={"#ffffff"}
          endColor={"#BA0315"}
          size={52}
          padding={26}
        />
      </div>
    </div>
  );
};

export default function OurTeam() {
  const isLargeDesktop = useMediaQuery("(min-width:1280px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const slides = isLargeDesktop ? 3 : isDesktop ? 2 : isTablet ? 1.5 : 1.4;
  const { t } = useTranslation();

  const reviews = [
    {
      name: `${t("reviewsSection.reviews.0.name")}`,
      position: `${t("reviewsSection.reviews.0.position")}`,
      image: image1,
      quote: `${t("reviewsSection.reviews.0.quote")}`,
    },
    {
      name: `${t("reviewsSection.reviews.1.name")}`,
      position: `${t("reviewsSection.reviews.1.position")}`,
      image: image2,
      quote: `${t("reviewsSection.reviews.1.quote")}`,
    },
    {
      name: `${t("reviewsSection.reviews.2.name")}`,
      position: `${t("reviewsSection.reviews.2.position")}`,
      image: image3,
      quote: `${t("reviewsSection.reviews.2.quote")}`,
    },
    {
      name: `${t("reviewsSection.reviews.2.name")}`,
      position: `${t("reviewsSection.reviews.2.position")}`,
      image: image3,
      quote: `${t("reviewsSection.reviews.2.quote")}`,
    },
  ];

  return (
    <section className="bg-[#111111] py-[6.75vh]">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={"our team of"}
          titleSecondPart={"professionals"}
          isDescription={false}
          inView={true}
          textIsWhite={true}
          titlePl={"lg:pl-[35%]"}
          descriptionPart={<NavigationButtons />}
        />

        <style>
          {`
            .custom-swiper-prev.swiper-button-disabled,
            .custom-swiper-next.swiper-button-disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }
          `}
        </style>

        <Swiper
          modules={[Navigation]}
          spaceBetween={72}
          slidesPerView={slides}
          navigation={{
            nextEl: ".custom-swiper-next-team",
            prevEl: ".custom-swiper-prev-team",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={1000}
          className="reviews-swiper">
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-[21px] text-white">
                <div className="flex justify-between items-end gap-[15px]">
                  <h3 className="text-[26px]">{review.name}</h3>
                  <Description>{review.position}</Description>
                </div>
                <div className="w-full md:h-[478px]">
                  <img src={review.image} alt={review.name} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentContainer>
    </section>
  );
}
