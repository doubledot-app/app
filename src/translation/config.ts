import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import root from './en/root.json';

const defaultLng = 'en';
const defaultNS = 'root';
const resources: InitOptions['resources'] = {
  en: {
    root
  }
};

i18n.use(initReactI18next).init({
  defaultNS,
  resources,
  lng: defaultLng,
  fallbackLng: defaultLng,
  debug: false /* isDev */,
  interpolation: { escapeValue: false }
});

export default i18n;
