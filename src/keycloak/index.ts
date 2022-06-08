import Keycloak from 'keycloak-js'

const ssl = JSON.parse(process.env.REACT_APP_KEYCLOAK_SSL ? process.env.REACT_APP_KEYCLOAK_SSL : 'false')
const host = process.env.REACT_APP_KEYCLOAK_HOST
const port = process.env.REACT_APP_KEYCLOAK_PORT
const realm = process.env.REACT_APP_KEYCLOAK_REALM ? process.env.REACT_APP_KEYCLOAK_REALM : ''
const clientId = process.env.REACT_APP_KEYCLOAK_CLIENT_ID ? process.env.REACT_APP_KEYCLOAK_CLIENT_ID : ''

export const getKeycloakClient = () => {
  return new Keycloak({
    url: `${ssl ? 'https' : 'http'}://${host}:${port}`,
    realm,
    clientId,
  })
}
