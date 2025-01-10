import ContentContainer from "../../UI/ContentContainer";
import SectionHeader from "../../UI/SectionHeader";
import Description from "../../UI/Description";
import Button from "../../UI/Button";
import image1 from "../../../images/sections/ourGallery/1.png";
import image2 from "../../../images/sections/ourGallery/2.png";
import image3 from "../../../images/sections/ourGallery/3.png";
import image4 from "../../../images/sections/ourGallery/4.png";
import image5 from "../../../images/sections/ourGallery/5.png";
import React from "react";
import { useTranslation } from "react-i18next";

const InfiniteImageSlider = () => {
  const images = [image1, image2, image3, image4, image5];
  // Duplicate the images array to create seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden bg-white relative mt-8">
      <div className="flex animate-scroll">
        {duplicatedImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 px-4">
            <img
              src={image}
              alt={`CAD CAM Equipment ${index + 1}`}
              className="md:w-[348px] w-[230px] h-auto object-cover"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-348px * 5));
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

const DescriptionPart = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between text-[#111111] sm:items-end items-start">
      <Description>{t("ourGallery.description")}</Description>
      <Button useLink to={"/gallery"} variant="outline-red" className="mt-8">
        {t("buttons.viewAllWorks")}
      </Button>
    </div>
  );
};

export default function OurGallery() {
  const { t, i18n } = useTranslation();
  return (
    <section id="gallery" className="bg-white text-[#111111] py-[6.75vh]">
      <ContentContainer>
        <SectionHeader
          titleFirstPart={t("ourGallery.title1")}
          titleSecondPart={t("ourGallery.title2")}
          titlePl={`${i18n.language === "en" ? "lg:pl-[40%]" : "lg:pl-[15%]"}`}
          isDescription={false}
          descriptionPart={<DescriptionPart />}
          inView={true}
        />
      </ContentContainer>

      <InfiniteImageSlider />
    </section>
  );
}
