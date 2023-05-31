import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
   
    
    fallbackLng: "en",
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: (lng) => {
        const url = `/locales/${lng}/translation.json`;
        console.log('URL ', url);
        return url;
      },
      crossDomain: true
    }
    
  });

export default i18n;