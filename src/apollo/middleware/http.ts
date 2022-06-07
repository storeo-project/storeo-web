import { HttpLink } from '@apollo/client'

const ssl = process.env.REACT_APP_GRAPHQL_SSL
const host = process.env.REACT_APP_GRAPHQL_HOST
const port = process.env.REACT_APP_GRAPHQL_PORT
const version = process.env.REACT_APP_GRAPHQL_VERSION
const route = process.env.REACT_APP_GRAPHQL_ROUTE

const httpLink: HttpLink = new HttpLink({
  uri: `${ssl ? 'https' : 'http'}://${host}:${port}/${version}/${route}`,
  headers: {},
})

export default httpLink
