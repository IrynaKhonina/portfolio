import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'


import enHeader from '@/locales/en/enHeader.json'
import enMain from '@/locales/en/enMain.json'
import enAboutMe from '@/locales/en/enAboutMe.json'
import enSkills from '@/locales/en/enSkills.json'
import enPortfolio from '@/locales/en/enPortfolio.json'
import enContacts from '@/locales/en/enContacts.json'
import enFooter from '@/locales/en/enFooter.json'


import ruHeader from '@/locales/ru/ruHeader.json'
import ruMain from '@/locales/ru/ruMain.json'
import ruAboutMe from '@/locales/ru/ruAboutMe.json'
import ruSkills from '@/locales/ru/ruSkills.json'
import ruPortfolio from '@/locales/ru/ruPortfolio.json'
import ruContacts from '@/locales/ru/ruContacts.json'
import ruFooter from '@/locales/ru/ruFooter.json'

// Сборка ресурсов
const resources = {
  en: {
    header: enHeader,
    main: enMain,
    aboutMe: enAboutMe,
    skills: enSkills,
    portfolio: enPortfolio,
    contacts: enContacts,
    footer: enFooter,
  },
  ru: {
    header: ruHeader,
    main: ruMain,
    aboutMe: ruAboutMe,
    skills: ruSkills,
    portfolio: ruPortfolio,
    contacts: ruContacts,
    footer: ruFooter,
  },
}

i18next.use(initReactI18next).init({
  debug: process.env.NODE_ENV === 'development',
  fallbackLng: 'en',
  supportedLngs: ['en', 'ru'],
  interpolation: {
    escapeValue: false,
  },
  resources,
  defaultNS: 'header',
  ns: ['header', 'main', 'aboutMe', 'skills', 'portfolio', 'contacts', 'footer'],
})

export default i18next