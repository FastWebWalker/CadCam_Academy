import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/en.json";
import ua from "./ua/ua.json";

const SUPPORTED_LANGUAGES = ["en", "ua"];
let lng = localStorage.getItem("i18nextLng");

if (!lng) {
  const browserLanguage = navigator.language.slice(0, 2);
  const browserLanguages = navigator.languages.map((i) => i.slice(0, 2));

  if (SUPPORTED_LANGUAGES.includes(browserLanguage)) {
    lng = browserLanguage;
  } else if (browserLanguages.includes("ua")) {
    lng = "ua";
  } else if (browserLanguages.includes("en")) {
    lng = "en";
  } else {
    lng = "en";
  }
  localStorage.setItem("i18nextLng", lng);
}

i18n.use(initReactI18next).init({
  lng: lng,
  fallbackLng: "ua",
  resources: {
    en: {
      translation: en,
    },
    ua: {
      translation: ua,
    },
  },
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
