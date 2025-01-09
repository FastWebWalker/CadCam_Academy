import React from "react";
import ContentContainer from "../../UI/ContentContainer";
import "./interested.css";
import background from "../../../images/sections/interested/background.png";
import Button from "../../UI/Button";
import { useTranslation } from "react-i18next";

export default function Interested() {
  const { t } = useTranslation();
  const text = t("interested.text");

  return (
    <section className="bg-[#111111] text-white py-[6.75vh] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute bottom-[-50%] right-0 w-[36.52vw] h-[36.52vw] pointer-events-none">
        <img
          src={background}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ContentContainer with overflow-hidden */}
      <ContentContainer>
        <div className="interested-text overflow-hidden mb-[3.4vh] text-[3.61vw] uppercase">
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{
                animationDelay: `${index * 0.1}s`, // Slight delay for each letter
              }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        <Button variant="secondary">{t("buttons.placeAnOrder")}</Button>
      </ContentContainer>
    </section>
  );
}
