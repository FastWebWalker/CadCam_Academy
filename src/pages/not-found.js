import React from "react";
import ContentContainer from "../components/UI/ContentContainer";
import Button from "../components/UI/Button";
import Description from "../components/UI/Description";
import { useTranslation } from "react-i18next";
// import notFoundImage from "../images/sections/not-found/Frame 48097178.svg";
import { Link } from "react-router-dom";
import notFoundImage from "../images/sections/notFound/404.png";
import background from "../images/sections/interested/background.png";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <section className="relative ">
      <div className="relative z-60 overflow-hidden flex justify-center items-center bg-[#111111] h-[100vh] w-full">
        <div className="absolute bottom-[-20%] right-0 w-[36.52vw] h-[36.52vw] pointer-events-none">
          <img
            src={background}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <ContentContainer>
          <div className="flex flex-col justify-center items-center gap-[42px] mb-[24px]">
            <h3 className="font-normal text-[32px] uppercase text-white text-center">
              {t("notFound.title")}
            </h3>

            <img src={notFoundImage} alt="not-found" />
            <Description className="text-white">
              {t("notFound.description")}
            </Description>
          </div>
          <div className="flex-grow-0 flex justify-center items-center">
            <Link to={"/"}>
              <Button
                variant="red-white"
                className="hover:bg-white hover:border-white">
                {t("notFound.button")}
              </Button>
            </Link>
          </div>
        </ContentContainer>
      </div>
    </section>
  );
};

export default NotFound;
