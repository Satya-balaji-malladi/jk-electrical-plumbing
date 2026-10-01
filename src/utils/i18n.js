import en from '../i18n/en.json';
import te from '../i18n/te.json';
import hi from '../i18n/hi.json';
import { DEFAULT_LANG } from './constants.js';

const translations = { en, te, hi };

export function getTranslations(lang) {
  return translations[lang] || translations[DEFAULT_LANG];
}
