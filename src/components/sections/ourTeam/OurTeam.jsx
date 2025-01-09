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
  const isMobile = useMediaQuery("(max-width: 450px)");
  return (
    <div className="flex gap-[10px]">
      <div className="custom-swiper-prev-team">
        <NavigationArrow
          startBorderColor={"border-[#979797]"}
          endBorderColor={"border-[#BA0315]"}
          startColor={"#979797"}
          endColor={"#BA0315"}
          size={isMobile ? 34 : 52}
          padding={"lg:p-[26px] md:p-[14px] p-[12.5px]"}
        />
      </div>
      <div className="custom-swiper-next-team">
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

export default function OurTeam() {
  const isLargeDesktop = useMediaQuery("(min-width:1280px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isMobile = useMediaQuery("(max-width: 450px)");
  const slides = isLargeDesktop ? 3 : isDesktop ? 2 : isTablet ? 1.5 : 1.1;
  const { t } = useTranslation();

  const reviews = [
    {
      name: `${t("ourTeamSection.team.0.name")}`,
      position: `${t("ourTeamSection.team.0.position")}`,
      image: image1,
    },
    {
      name: `${t("ourTeamSection.team.1.name")}`,
      position: `${t("ourTeamSection.team.1.position")}`,
      image: image2,
    },
    {
      name: `${t("ourTeamSection.team.2.name")}`,
      position: `${t("ourTeamSection.team.2.position")}`,
      image: image3,
    },
    {
      name: `${t("ourTeamSection.team.2.name")}`,
      position: `${t("ourTeamSection.team.2.position")}`,
      image: image3,
    },
  ];

  return (
    <section id="team" className="bg-[#111111] py-[6.75vh]">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={t("ourTeamSection.title1")}
          titleSecondPart={t("ourTeamSection.title2")}
          isDescription={false}
          inView={true}
          textIsWhite={true}
          titlePl={"xl:pl-[25%] lg:pl-[10%]"}
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
          spaceBetween={isMobile ? 20 : 72}
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
                <div className="flex sm:justify-between sm:items-center justify-center items-start gap-[15px] flex-wrap sm:flex-row flex-col">
                  <h3 className="text-[26px]">{review.name}</h3>
                  <Description className="text-right">
                    {review.position}
                  </Description>
                </div>
                <div className="w-full sm:max-h-[450px] max-h-[420px] h-auto">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentContainer>
    </section>
  );
}
