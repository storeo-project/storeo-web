import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { ApolloProvider } from '@apollo/client'

import App from './App'
import { getApolloClient } from 'apollo'
import createI18n from './i18n/i18n'
import reportWebVitals from './reportWebVitals'

async function bootStrap() {

  const client = await getApolloClient()

  const i18n = await createI18n()

  const root = ReactDOM.createRoot(document.getElementById('root') as Element)

  root.render(
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ApolloProvider>,
  )

  reportWebVitals()
}

bootStrap().then()
