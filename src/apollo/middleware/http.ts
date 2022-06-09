import { HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const ssl = JSON.parse(process.env.REACT_APP_GRAPHQL_SSL ? process.env.REACT_APP_GRAPHQL_SSL : 'false')
const host = process.env.REACT_APP_GRAPHQL_HOST
const port = process.env.REACT_APP_GRAPHQL_PORT
const version = process.env.REACT_APP_GRAPHQL_VERSION
const route = process.env.REACT_APP_GRAPHQL_ROUTE

const authLink = setContext((_, { headers }) => {
  const value = localStorage.getItem('token')
  const token = value ? JSON.parse(value) : {}
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token.token}` : '',
    },
  }
})

const httpLink: HttpLink = new HttpLink({
  uri: `${ssl ? 'https' : 'http'}://${host}:${port}/${version}/${route}`,
  headers: {},
})

export default authLink.concat(httpLink)
