import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  console.log("rerender");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // Save to localStorage
  };

  return (
    <div className="w-[109px] h-[40px] inline-flex items-center p-1 rounded-[30px] bg-transparent relative border border-[0.3px] border-[rgba(255,255,255,0.4)]">
      {/* Sliding background */}
      <div
        className={`absolute h-[30px] w-[50px] bg-redCustom rounded-[30px] transition-all duration-300 ease-in-out ${
          i18n.language === "en" ? "left-[7px]" : "left-[calc(50%-1px)]"
        }`}
      />

      {/* Buttons */}

      <button
        onClick={() => changeLanguage("en")}
        className={`ml-1 px-[14.16px] py-1  rounded-full font-normal relative transition-colors duration-300 z-10 ${
          i18n.language === "en"
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}>
        EN
      </button>
      <button
        onClick={() => changeLanguage("ua")}
        className={`right-1 px-[13.7px] py-1 rounded-full font-medium relative transition-colors duration-300 z-10 ${
          i18n.language === "ua"
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}>
        UA
      </button>
    </div>
  );
};

export default LanguageToggle;
