import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './Langs/ko'; //ko/index.js 와 같음   알아서 index.js가 따라옴(?)
import en from './Langs/en'; // 이 친구도 같음

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources, //resources:resources 이름과 값이 같으면 한개만 적어도 된다!
  lng: navigator.language,
});
