import 'semantic-ui-css/semantic.min.css'

import * as NextImage from 'next/image'
import { ThemeProvider } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import theme from '../src/app/theme'

addDecorator(withThemes(ThemeProvider, [theme]))

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
