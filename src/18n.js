// 18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import ukTranslation from './locales/uk.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    uk: { translation: ukTranslation },
  },
  lng: 'en', // язык по умолчанию
  fallbackLng: 'en', // язык по умолчанию для случая, когда текущий язык не найден
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
