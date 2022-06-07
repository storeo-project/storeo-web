import i18next, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './locales'

async function createI18n() {

  const options: InitOptions = {
    resources: resources.default,
    debug: false,
    fallbackLng: 'en',
    lng: 'vi',
    keySeparator: false,
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  }

  await i18next.use(initReactI18next).init(options)

  return i18next
}

export default createI18n
