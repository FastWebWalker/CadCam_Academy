import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";
import Description from "../../UI/Description";
import Button from "../../UI/Button";
import EquipmentItem from "./EquipmentItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../../images/sections/ourEquipment/1.png";
import image2 from "../../../images/sections/ourEquipment/2.png";
import image3 from "../../../images/sections/ourEquipment/3.png";
import image4 from "../../../images/sections/ourEquipment/4.png";
import image5 from "../../../images/sections/ourEquipment/5.png";
import image6 from "../../../images/sections/ourEquipment/6.png";
import image7 from "../../../images/sections/ourEquipment/7.png";
import background from "../../../images/sections/ourEquipment/backroung.png";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const DescriptionPart = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between text-[#111111] sm:items-end items-start">
      <Description>{t("ourEquipment.description")}</Description>
      <Button
        variant="outline-red"
        className="mt-8"
        href={
          "https://www.setrade.com.ua/product-category/products/for-cadcam/"
        }>
        {t("buttons.buyAMachine")}
      </Button>
    </div>
  );
};

export default function OurEquipment() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const isTablet = useMediaQuery("(min-width: 650px) and (max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 649px)");
  const isMobileSmall = useMediaQuery("(max-width: 400px");
  const { t, i18n } = useTranslation();

  const slidesPerView = isTablet ? 2.5 : isMobile ? 1.5 : isMobileSmall && 1;

  const equipmentData = [
    {
      title: "ARUM 5X-200",
      image: image1,
    },
    {
      title: "ARUM 5X-300D",
      image: image2,
    },
    {
      title: "ARUM 5X-400",
      image: image3,
    },
    {
      title: "ARUM 5X-300Pro",
      image: image4,
    },
    {
      title: "ARUM 5X-450",
      image: image5,
    },
    {
      title: "ARUM 5X-500",
      image: image6,
    },
    {
      title: "ARUM 5X-500L",
      image: image7,
    },
  ];

  return (
    <section
      id="equipment"
      className="bg-white py-[6.75vh] text-[#111111] relative z-[1]">
      <div className="absolute bottom-0 right-0 opacity-100 sm:z-[0] z-[-1]">
        <img src={background} alt="background" />
      </div>

      <ContentContainer>
        <SectionHeader
          titleFirstPart={t("ourEquipment.title1")}
          titleSecondPart={t("ourEquipment.title2")}
          isDescription={false}
          descriptionPart={<DescriptionPart />}
          textIsWhite={false}
          titlePl={`${
            i18n.language === "en"
              ? "lg:pl-[20%]"
              : "[@media(min-width:1350px)]:pl-[20%]"
          }`}
          isLongDescription={true}
          inView={true}
        />
        {isDesktop && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-x-[5vw] gap-y-[6.4vh] justify-between mt-8 z-[1]">
            {equipmentData.map((service) => (
              <EquipmentItem
                key={service.title}
                title={service.title}
                image={service.image}
              />
            ))}
          </div>
        )}
        {(isTablet || isMobile) && (
          <div className="mt-8 z-[1]">
            <Swiper
              modules={[Navigation]}
              spaceBetween={32}
              slidesPerView={slidesPerView}
              loop={true}
              pagination={{ clickable: true }}
              className="equipment-swiper">
              {equipmentData.map((service) => (
                <SwiperSlide key={service.title}>
                  <EquipmentItem title={service.title} image={service.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </ContentContainer>
    </section>
  );
}
