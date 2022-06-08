import Keycloak from 'keycloak-js'

export const getKeycloakClient = () => {
  return new Keycloak({
    url: 'http://10.0.6.175:8180',
    realm: 'airtag',
    clientId: 'airtag-web',
  })
}
