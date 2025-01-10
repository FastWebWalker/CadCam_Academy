import React from "react";
import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";
import { useInView } from "react-intersection-observer";
import WhyChooseUsItem from "./whyChooseUsItem";
import image1 from "../../../images/sections/whyChooseUs/1.svg";
import image2 from "../../../images/sections/whyChooseUs/2.svg";
import image3 from "../../../images/sections/whyChooseUs/3.svg";
import image4 from "../../../images/sections/whyChooseUs/4.svg";
import image5 from "../../../images/sections/whyChooseUs/5.svg";
import image6 from "../../../images/sections/whyChooseUs/6.svg";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="whyWe"
      className="relative bg-[#111111] text-white py-[6.75vh]"
      ref={ref}>
      <ContentContainer>
        <SectionHeader
          titleFirstPart={t("chooseSection.title1")}
          titleSecondPart={t("chooseSection.title2")}
          description={t("chooseSection.subtitle")}
          isDescription={true}
          inView={inView}
          titlePl={`${
            i18n.language === "en"
              ? "lg:pl-[25%]"
              : "[@media(min-width:1350px)]:pl-[25%]"
          }`}
          isLongDescription={true}
          textIsWhite={true}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-x-[10vw] gap-y-[6.4vh] justify-between mt-8">
          <WhyChooseUsItem
            icon={image1}
            title={
              <>
                {t("chooseSection.items.0.title1")}
                {t("chooseSection.items.0.title2")}
              </>
            }
            description={t("chooseSection.items.0.description")}
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image2}
            title={
              <>
                {t("chooseSection.items.1.title1")}
                <br></br>
                {t("chooseSection.items.1.title2")}
              </>
            }
            description={t("chooseSection.items.1.description")}
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image3}
            title={
              <>
                {t("chooseSection.items.2.title1")}
                <br></br> {t("chooseSection.items.2.title2")}
              </>
            }
            description={t("chooseSection.items.2.description")}
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image4}
            title={
              <>
                {t("chooseSection.items.3.title1")}
                <br></br> {t("chooseSection.items.3.title2")}
              </>
            }
            description={t("chooseSection.items.3.description")}
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image5}
            title={
              <>
                {t("chooseSection.items.4.title1")}
                <br></br>
                {t("chooseSection.items.4.title2")}
              </>
            }
            description={t("chooseSection.items.4.description")}
            inView={inView}
          />

          <WhyChooseUsItem
            icon={image6}
            title={
              <>
                {t("chooseSection.items.5.title1")}
                <br></br> {t("chooseSection.items.5.title2")}
              </>
            }
            description={t("chooseSection.items.5.description")}
            inView={inView}
          />
        </div>
      </ContentContainer>
    </section>
  );
}
