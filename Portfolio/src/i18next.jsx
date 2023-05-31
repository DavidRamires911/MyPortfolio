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
   
    
    fallbackLng: "en",
    debug: true,
    whitelist: Languages,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: (lng, ns) => {
        const url = `/locales/${lng}/${ns}.json`;
        console.log('URL ', url);
        return url;
      },
      crossDomain: true
    }
    
  });

export default i18n;