import { useTranslation } from "react-i18next";

export default function Title({ firstPart, secondPart, className, pl }) {
  const { i18n } = useTranslation();
  return (
    <div
      className={`  ${
        i18n.language === "en"
          ? "flex lg:flex-col"
          : "flex [@media(min-width:1350px)]:flex-col"
      } gap-[10px] flex-wrap`}>
      <h2
        className={`lg:text-[64px] md:text-[44px] text-[32px] lg:leading-[65.35px] uppercase tracking-wide ${className}`}>
        {firstPart}
      </h2>
      <h2
        className={`${pl} lg:text-[64px] md:text-[44px] text-[32px] lg:leading-[65.35px] uppercase tracking-wide whitespace-nowrap ${className}`}>
        {secondPart}
      </h2>
    </div>
  );
}
