

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const Languages = ["en", "pt"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    whitelist: Languages,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "../locales/{{lng}}/{{ns}}.json",
      // Set the baseURL option if your app is not deployed at the root of your domain
      // e.g., if deployed at https://example.com/my-app, set baseURL: "/my-app"
      baseURL: "https://davidcorreia.netlify.app/",
    },
  });

export default i18n;