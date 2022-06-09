import { useContext } from 'react'
import { AuthContext } from './provider'

export function useKeycloak() {
  const ctx = useContext(AuthContext)

  if (!ctx) {
    throw new Error(
      'useKeycloak hook must be used inside ReactKeycloakProvider context',
    )
  }

  if (!ctx.client) {
    throw new Error('client has not been assigned to ReactKeycloakProvider')
  }

  const { client, initialized, token } = ctx

  return {
    initialized,
    keycloak: client,
    token: token,
  }
}
