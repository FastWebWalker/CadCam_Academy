import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLng");
    if (!storedLanguage) {
      i18n.changeLanguage("ua");
      localStorage.setItem("i18nextLng", "ua");
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // Save to localStorage
  };

  return (
    <div className="w-[109px] h-[32px] inline-flex items-center rounded-[30px] bg-transparent relative">
      {/* Sliding background */}
      <div
        className={`absolute h-[32px] w-[50px] bg-redCustom rounded-[30px] transition-all duration-300 ease-in-out ${
          i18n.language === "en" ? "left-[7px]" : "left-[calc(50%-1px)]"
        }`}
      />

      {/* Buttons */}
      <button
        onClick={() => changeLanguage("en")}
        className={`px-[14px] py-[3.5px] rounded-full font-normal relative transition-colors duration-300 z-10 ${
          i18n.language === "en"
            ? "text-white border-[0.5px] border-[#B60214]"
            : "text-gray-400 hover:text-white"
        }`}>
        EN
      </button>
      <button
        onClick={() => changeLanguage("ua")}
        className={`px-[14px] py-[3.5px] rounded-full font-medium relative transition-colors duration-300 z-10 ${
          i18n.language === "ua"
            ? "text-white border-[0.5px] border-[#B60214]"
            : "text-gray-400 hover:text-white"
        }`}>
        UA
      </button>
    </div>
  );
};

export default LanguageToggle;
