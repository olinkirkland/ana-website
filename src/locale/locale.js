import en from './en.json';
import de from './de.json';

export let translations, currentLanguage;

export function initializeAppLanguage() {
  currentLanguage = localStorage.getItem('language');
  if (!currentLanguage) currentLanguage = 'en';
  setAppLanguage(currentLanguage);
}

export function setAppLanguage(value) {
  console.log('Setting language to: ' + value);
  currentLanguage = value;
  localStorage.setItem('language', value);
  if (value === 'en') translations = en;
  if (value === 'de') translations = de;
}

export function text(key, ...args) {
  if (!translations) initializeAppLanguage();
  const value = translations[key] ? translations[key] : `[${key}]`;
  if (!translations[key]) console.warn(key);
  // Replace all instances of '%%' in the string with the passed in arguments
  return value.replace(/%%/g, () => args.shift());
}
