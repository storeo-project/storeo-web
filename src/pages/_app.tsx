import React from 'react'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../components/auth/auth-provider'
import { withWunderGraph } from '../components/generated/nextjs'
import 'semantic-ui-css/semantic.min.css'
import { wrapper } from '../app/store'

function PmsApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default withWunderGraph(wrapper.withRedux(PmsApp), {
  baseURL: process.env.BASE_URL,
})
