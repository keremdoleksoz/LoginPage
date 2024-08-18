import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './Locales/en/translation.json';
import trTranslation from './Locales/tr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      tr: {
        translation: trTranslation
      }
    },
    lng: "tr", // default language
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
