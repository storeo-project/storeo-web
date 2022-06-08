import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { ApolloProvider } from '@apollo/client'
import { ReactKeycloakProvider } from 'keycloak/web'

import App from './App'
import { getApolloClient } from 'apollo'
import createI18n from './i18n/i18n'
import reportWebVitals from './reportWebVitals'

import Keycloak from 'keycloak-js'

import './assets/index.scss'

async function bootStrap() {

  const keycloak = new Keycloak({
    url: 'http://10.0.6.175:8180',
    realm: 'airtag',
    clientId: 'airtag-web',
  })

  const client = await getApolloClient()

  const i18n = await createI18n()

  const root = ReactDOM.createRoot(document.getElementById('root') as Element)

  root.render(
    <ReactKeycloakProvider authClient={keycloak}>
      <ApolloProvider client={client}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ApolloProvider>,
    </ReactKeycloakProvider>,
  )

  reportWebVitals()
}

bootStrap().then()
