import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const Languages = ["en", "br"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
      crossDomain: true
     
    },
    
    fallbackLng: "en",
    debug: true,
    whitelist: Languages,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    
  });

export default i18n;