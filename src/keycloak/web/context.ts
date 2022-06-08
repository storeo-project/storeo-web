import { createAuthContext } from '../core'

export const reactKeycloakWebContext = createAuthContext<any>()

export const ReactKeycloakWebContextConsumer = reactKeycloakWebContext.Consumer
