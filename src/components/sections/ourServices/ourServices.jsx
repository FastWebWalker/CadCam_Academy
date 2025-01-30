import React from "react";
import Button from "../../UI/Button";
import ContentContainer from "../../UI/ContentContainer";
import Description from "../../UI/Description";
import SectionHeader from "../../UI/SectionHeader";
import ServicesItem from "./ServicesItem";
import image1 from "../../../images/sections/ourServices/01.png";
import image2 from "../../../images/sections/ourServices/02.png";
import image3 from "../../../images/sections/ourServices/03.png";
import image4 from "../../../images/sections/ourServices/04.png";
import image5 from "../../../images/sections/ourServices/05.png";
import image6 from "../../../images/sections/ourServices/06.png";
import { useTranslation } from "react-i18next";

const DescriptionPart = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between text-[#111111]">
      <Description>{t("servicesSection.subtitle")}</Description>
      <div className="flex sm:justify-end gap-4 mt-8 flex-wrap justify-start">
        <Button
          variant="outline-black"
          href={
            "https://drive.google.com/file/d/1bMijMT2zQstrwSZ_ZHilFIev7pEMIxqt/view?usp=sharing"
          }>
          {t("buttons.getAPrice")}
        </Button>
        <Button
          variant="outline-red"
          href={"https://order.cadcam.energy/login"}>
          {t("buttons.makeAnOrder")}
        </Button>
      </div>
    </div>
  );
};

export default function OurServices() {
  const { t } = useTranslation();
  const servicesData = [
    {
      id: "01",
      title: t("servicesSection.services.0.title"),
      description: t("servicesSection.services.0.description"),
      image: image1,
    },
    {
      id: "02",
      title: t("servicesSection.services.1.title"),
      description: t("servicesSection.services.1.description"),
      image: image2,
    },
    {
      id: "03",
      title: t("servicesSection.services.2.title"),
      description: t("servicesSection.services.2.description"),
      image: image3,
    },
    {
      id: "04",
      title: t("servicesSection.services.3.title"),
      description: t("servicesSection.services.3.description"),
      image: image4,
    },
    {
      id: "05",
      title: t("servicesSection.services.4.title"),
      description: t("servicesSection.services.4.description"),
      image: image5,
    },
    {
      id: "06",
      title: t("servicesSection.services.5.title"),
      description: t("servicesSection.services.5.description"),
      image: image6,
    },
  ];

  return (
    <section id="services" className="bg-white text-[#111111] py-[6.75vh]">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={t("servicesSection.title1")}
          titleSecondPart={t("servicesSection.title2")}
          isDescription={false}
          descriptionPart={<DescriptionPart />}
          textIsWhite={false}
          titlePl={"lg:pl-[25%]"}
          inView={true}
        />
        <div className="mt-12">
          {servicesData.map((service) => (
            <ServicesItem
              key={service.id}
              number={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
