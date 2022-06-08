import Keycloak from 'keycloak-js'

const ssl = JSON.parse(process.env.REACT_APP_KEYCLOAK_SSL ? process.env.REACT_APP_KEYCLOAK_SSL : 'false')
const host = process.env.REACT_APP_KEYCLOAK_HOST
const port = process.env.REACT_APP_KEYCLOAK_PORT

export const getKeycloakClient = () => {
  return new Keycloak({
    url: `${ssl ? 'https' : 'http'}://${host}:${port}`,
    realm: 'airtag',
    clientId: 'airtag-web',
  })
}
