import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: localStorage.getItem('language') === null || undefined ? 'en' : localStorage.getItem('language'),
  resources: {
    en: {
      translations: require('../locals/en/translations.json')
    },
    ar: {
      translations: require('../locals/ar/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'ar'];

export default i18n;